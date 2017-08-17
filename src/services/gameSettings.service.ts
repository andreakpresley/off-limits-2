import { Injectable } from '@angular/core';
import { easyWords } from '../assets/easyWords';

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

  constructor() {
    this.team1score = 0;
    this.team2score = 0;
    this.currentTeam = Team.team1;
    this.team1Text = "Team 1";
    this.team2Text = "Team 2";
    this.winningScore = 10;
    this.difficultyLevel = "easy";
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
    let randomNumber = Math.floor(Math.random() * easyWords.length)
    return easyWords[randomNumber];
  }

  public getCurrentTeamText() {
    if(this.currentTeam === Team.team1) {
      return this.team1Text;
    } else {
      return this.team2Text;
    }
  }

}
