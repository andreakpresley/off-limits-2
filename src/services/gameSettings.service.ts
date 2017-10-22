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

  private easyNumbersToPick = [];
  private hardNumbersToPick = [];

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
      let randomNumber = Math.floor(Math.random() * this.easyNumbersToPick.length);
      this.findAndRemoveNumberFromArray(this.easyNumbersToPick, randomNumber);
      return easyWords[randomNumber];
    } else {
      let randomNumber = Math.floor(Math.random() * this.hardNumbersToPick.length);
      this.findAndRemoveNumberFromArray(this.hardNumbersToPick, randomNumber);
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
      if (data) {
        this.defaultTimer = data.defaultTimer;
        this.winningScore = data.winningScore;
        this.difficultyLevel = data.difficultyLevel;
      }
    });

    this.getUpAvaliableNumbers(this.difficultyLevel);
  }

  private getUpAvaliableNumbers(list) {
    this.storage.get(list + 'Numbers').then((data: Array<number>) => {
      if (data.length) {
        if (list === 'easy') {
          this.easyNumbersToPick = data;
        } else {
          this.hardNumbersToPick = data;
        }
      } else {
        this.setUpAvaliableNumbers(list);
      }
    })
  }

  private setUpAvaliableNumbers(list) {
    let numbers = [];
    for (let i = 0; i < list.length; i++) {
      numbers.push(i);
    }
    this.setAvaliableNumbersStorage(list, numbers);
  }

  private setAvaliableNumbersStorage(list, array) {
    this.storage.set(list + 'Numbers', array).then(data => {
      console.log('New numbers list created', data);
      if (list === 'easy') {
        this.easyNumbersToPick = array;
      } else {
        this.hardNumbersToPick = array;
      }
    });
  }

  private findAndRemoveNumberFromArray(array, number) {
    array.filter(element => element != number);

    if (array.length === 0) {
      this.setUpAvaliableNumbers(this.difficultyLevel);
    } else {
      this.setAvaliableNumbersStorage(this.difficultyLevel, array);
    }
  }

}
