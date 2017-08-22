import { Injectable } from '@angular/core';
import { easyWords } from '../assets/easyWords';
import { hardWords } from '../assets/hardWords';

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
  public seconds = 60;
  public defaultTimer = 60;

  constructor() {
    this.team1score = 0;
    this.team2score = 0;
    this.currentTeam = Team.team1;
    this.team1Text = "Team 1";
    this.team2Text = "Team 2";
    this.winningScore = 10;
    this.difficultyLevel = "easy";
    this.defaultTimer = this.seconds;
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
    // setTimeout(function(){ 
    //   console.log('timer changed')
    //   this.seconds = 40;
    // }, 5000);
  }

}
