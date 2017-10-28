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
      if (!this.easyNumbersToPick.length) {
        this.setUpAvaliableNumbers(easyWords)
      }
      let randomNumber = this.easyNumbersToPick[Math.floor(Math.random() * this.easyNumbersToPick.length)];
      this.findAndRemoveNumberFromArray(this.easyNumbersToPick, randomNumber);
      console.log("%%%random%%%%", randomNumber)
      console.log("$$$length$$$", easyWords.length)
      return easyWords[randomNumber];
    } else {
      if (!this.hardNumbersToPick.length) {
        this.setUpAvaliableNumbers(hardWords)
      }
      let randomNumber = this.hardNumbersToPick[Math.floor(Math.random() * this.hardNumbersToPick.length)];
      this.findAndRemoveNumberFromArray(this.hardNumbersToPick, randomNumber);
      console.log("%%%random%%%%", randomNumber)
      console.log("$$$length$$$", hardWords.length)
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

    if (this.difficultyLevel === 'easy') {
      this.getAvaliableNumbers(easyWords);
    } else {
      this.getAvaliableNumbers(hardWords)
    }
  }

  private getAvaliableNumbers(list) {
    this.storage.get(this.difficultyLevel + '').then((data: Array<number>) => {
      if (data && data.length) {
        if (this.difficultyLevel === 'easy') {
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
    if (this.difficultyLevel === 'easy') {
      this.easyNumbersToPick = numbers;
    } else {
      this.hardNumbersToPick = numbers;
    }
    this.saveAvaliableNumbersStorage(list, numbers);
  }

  private saveAvaliableNumbersStorage(list, array) {
    this.storage.set(this.difficultyLevel + '', array).then(data => {
      if (this.difficultyLevel === 'easy') {
        this.easyNumbersToPick = array;
      } else {
        this.hardNumbersToPick = array;
      }
    });
  }

  private findAndRemoveNumberFromArray(array, number) {
    array = array.filter(element => element != number);

    if (array.length === 0) {
      if (this.difficultyLevel === 'easy') {
        this.setUpAvaliableNumbers(easyWords);
      } else {
        this.setUpAvaliableNumbers(hardWords)
      }
    } else {
      this.saveAvaliableNumbersStorage(this.difficultyLevel, array);
    }
  }

}
