import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVarsService } from '../../services/globalVars.service';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {

  private defaultTimer: number = 120;
  private seconds: number = this.defaultTimer;
  private timer;
  private team1score: number;
  private team2score: number;

  constructor(public navCtrl: NavController, private globalVarsService: GlobalVarsService) {
    this.startRound();
    this.team1score = globalVarsService.getTeam1Score();
    this.team2score = globalVarsService.getTeam2Score();
  }

  public startRound() {
    console.log('starting game');
    this.startTimer();

  }

  private startTimer() {
    this.seconds = this.defaultTimer;
    this.countdownTimer();
  }

  private countdownTimer() {
    this.seconds = this.seconds - 1;
    if(this.seconds > 0) {
      this.timer = setTimeout(() => this.countdownTimer(), 1000);
    } else {
      console.log('timer over');
    }
  }

  public getSeconds() {
    return this.seconds;
  }

}
