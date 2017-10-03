import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { easyWords } from '../assets/easyWords';
import { hardWords } from '../assets/hardWords';
import { Settings } from './../models/settings';

export enum Team {
  team1,
  team2
}

@Injectable()
export class GamesSettingsService {

  //validate what text they can enter for team names in settings?

  public team1score;
  public team2score;
  public currentTeam;
  public team1Text;
  public team2Text;
  public winningScore;
  public difficultyLevel;
  public isGameBeingPlayed = false;
  public defaultTimer = 60;
  public seconds = 0;

  constructor(private storage: Storage) {
    this.team1score = 0;
    this.team2score = 0;
    this.currentTeam = Team.team1;
    this.team1Text = "Team 1";
    this.team2Text = "Team 2";
    this.winningScore = 10;
    this.difficultyLevel = "easy";
    this.getSettingsFromStorage();
  }

  public resetTeamScores() {
    this.team1score = 0;
    this.team2score = 0;
  }

  public playGame() {
    console.log('playing game');
    // this.startTimer();
    // this.navCtrl.setRoot(CardPage);
  }

  public getWord() {
    if (this.difficultyLevel === 'easy') {
      let randomNumber = Math.floor(Math.random() * easyWords.length)
      return easyWords[randomNumber];
    } else {
      let randomNumber = Math.floor(Math.random() * hardWords.length)
      return hardWords[randomNumber];
    }
  }

  public getCurrentTeamText() {
    if (this.currentTeam === Team.team1) {
      return this.team1Text;
    } else {
      return this.team2Text;
    }
  }

  //this need to reset all of the variables to whatever is in localstorage (check that it exists first)
  //Ask Josh about why he thinks we might need to return a Promise here
  private getSettingsFromStorage(): void {
    this.storage.get('settings').then((data: Settings) => {
      if(data) {
        this.defaultTimer = data.defaultTimer;
        this.winningScore = data.winningScore;
        this.difficultyLevel = data.difficultyLevel;
      }
    })
  }

}
