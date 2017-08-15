import { Word } from './../../models/word';
import { Component } from '@angular/core';
import { ReadyPage } from '../ready/ready';
import { WinnerPage } from '../winner/winner';
import { NavController } from 'ionic-angular';
import { GlobalVarsService } from '../../services/globalVars.service';
import { PlayGameService } from '../../services/playGame.service';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {
  private seconds: number;
  private timer;
  private team1score: number;
  private team2score: number;
  private team3score: number;
  private team1Text: string;
  private team2Text: string;
  private currentTeamText: string;
  private currentTeam;
  private wordObj: Word;

  constructor(
      public navCtrl: NavController,
      private globalVarsService: GlobalVarsService,
      private playGameService: PlayGameService
    ) {
    this.playGameService.playGame();
    this.startRound();
    this.team1score = globalVarsService.getTeam1Score();
    this.team2score = globalVarsService.getTeam2Score();
    this.team1Text = globalVarsService.getTeam1Text();
    this.team2Text = globalVarsService.getTeam2Text();
    this.currentTeam = globalVarsService.getCurrentTeam();
    this.currentTeamText = globalVarsService.getCurrentTeamText();

    this.seconds = this.playGameService.defaultTimer

    this.wordObj = playGameService.getWord();
    console.log('word', this.wordObj)
  }

  public startRound() {
    this.startTimer();
  }

  private startTimer() {
    this.seconds = this.playGameService.defaultTimer;
    this.countdownTimer();
  }

  private countdownTimer() {
    this.seconds = this.seconds - 1;
    if(this.seconds > 0) {
      this.timer = setTimeout(() => this.countdownTimer(), 1000);
    } else {
      this.timeOver();
    }
  }

  //Change the current team and then open the Ready page
  private timeOver() {
    if(this.currentTeam === 0) {
      this.globalVarsService.setCurrentTeam(1);
    } else {
      this.globalVarsService.setCurrentTeam(0);
    }
    this.navCtrl.setRoot(ReadyPage);
  }

  public getSeconds() {
    return this.seconds;
  }

  private skipOrTaboo() {
    if(this.currentTeam === 0) {
      this.globalVarsService.setTeam1Score(this.globalVarsService.getTeam1Score() - 1);
      this.team1score = this.globalVarsService.getTeam1Score();
    } else {
      this.globalVarsService.setTeam2Score(this.globalVarsService.getTeam2Score() - 1);
      this.team2score = this.globalVarsService.getTeam2Score();
    }
    this.wordObj = this.playGameService.getWord();
  }

  private correct() {
    if(this.currentTeam === 0) {
      this.globalVarsService.setTeam1Score(this.globalVarsService.getTeam1Score() + 1);
      this.team1score = this.globalVarsService.getTeam1Score();
      this.checkForWinningScore(this.team1score);
    } else {
      this.globalVarsService.setTeam2Score(this.globalVarsService.getTeam2Score() + 1);
      this.team2score = this.globalVarsService.getTeam2Score();
      this.checkForWinningScore(this.team2score);
    }
    this.wordObj = this.playGameService.getWord();
  }

  private checkForWinningScore(currentTeamScore) {
    if(currentTeamScore === this.globalVarsService.winningScore) {
      this.gameWon();
    }
  }

  private gameWon() {
    this.playGameService.isGameBeingPlayed = false;
    this.globalVarsService.resetTeamScores();
    this.navCtrl.setRoot(WinnerPage);
  }

}
