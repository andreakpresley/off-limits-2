import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

import { CardPage } from '../pages/card/card';

@Injectable()
export class PlayGameService {
  private defaultTimer: number = 90;
  private seconds: number = this.defaultTimer;
  private timer;

  // constructor(public navCtrl: NavController) {
  //
  // }

  public playGame() {
    console.log('playing game');
    this.startTimer();
    // this.navCtrl.setRoot(CardPage);
  }

  private startTimer() {
    console.log('start timer');
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
