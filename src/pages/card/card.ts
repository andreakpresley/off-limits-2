import { HomePage } from './../home/home';
import { NavController, App } from 'ionic-angular';

import { Word } from './../../models/word';
import { Component } from '@angular/core';
import { ReadyPage } from '../ready/ready';
import { WinnerPage } from '../winner/winner';
import { GamesSettingsService } from '../../services/gameSettings.service';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {
  private seconds: number;
  private timer;
  private wordObj: Word;

  constructor(
      private navCtrl: NavController,
      private app: App,
      private gamesSettingsService: GamesSettingsService
    ) {
    this.gamesSettingsService.playGame();
    this.seconds = this.gamesSettingsService.seconds;

    this.wordObj = gamesSettingsService.getWord();
  }

  ionViewDidEnter() {
    this.countdownTimer();
  }

  ionViewDidLeave() {
    // this.app.getRootNav().setRoot( HomePage );
    this.app.getRootNav().getActiveChildNav().select(3);
    clearTimeout(this.timer);
  }


  private countdownTimer() {
    this.gamesSettingsService.seconds = this.gamesSettingsService.seconds - 1;
    if(this.gamesSettingsService.seconds > 0) {
      this.timer = setTimeout(() => this.countdownTimer(), 1000);
    } else {
      this.gamesSettingsService.seconds = this.gamesSettingsService.defaultTimer;
      this.timeOver();
    }
  }

  //Change the current team and then open the Ready page
  //Shouldn't we check for a winner here?
  private timeOver() {
    if(this.gamesSettingsService.currentTeam === this.gamesSettingsService.team1Text) {
      this.gamesSettingsService.currentTeam = this.gamesSettingsService.team2Text;
    } else {
      this.gamesSettingsService.currentTeam = this.gamesSettingsService.team1Text;
    }
    this.navCtrl.setRoot(ReadyPage);
  }

  public getSeconds() {
    return this.seconds;
  }

  private skipOrTaboo() {
    if(this.gamesSettingsService.currentTeam === 0) {
      this.gamesSettingsService.team1score -= 1;
    } else {
      this.gamesSettingsService.team2score -= 1;
    }
    this.wordObj = this.gamesSettingsService.getWord();
  }

  private correct() {
    if(this.gamesSettingsService.currentTeam === 0) {
      this.gamesSettingsService.team1score += 1;
      this.checkForWinningScore(this.gamesSettingsService.team1score);
    } else {
      this.gamesSettingsService.team2score += 1;
      this.checkForWinningScore(this.gamesSettingsService.team2score);
    }
    this.wordObj = this.gamesSettingsService.getWord();
  }

  private checkForWinningScore(currentTeamScore) {
    if(currentTeamScore === this.gamesSettingsService.winningScore) {
      this.gameWon();
    }
  }

  private gameWon() {
    this.gamesSettingsService.isGameBeingPlayed = false;
    this.navCtrl.setRoot(WinnerPage);
  }

}
