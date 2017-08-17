import {Injectable} from '@angular/core';

export enum Team {
  team1,
  team2
}

@Injectable()
export class GlobalVarsService {

  //validate what text they can enter for team names in settings?

  private team1score;
  private team2score;
  private currentTeam;
  private team1Text;
  private team2Text;
  public winningScore;
  public difficultyLevel;
  // public teamTypes = Team;

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

  public setTeam1Score(value) {
    this.team1score = value;
  }

  public getTeam1Score() {
    return this.team1score;
  }

  public setTeam2Score(value) {
    this.team2score = value;
  }

  public getTeam2Score() {
    return this.team2score;
  }

  public setCurrentTeam(value) {
    this.currentTeam = value;
  }

  public getCurrentTeam() {
    return this.currentTeam;
  }

  public setTeam1Text(value) {
    this.team1Text = value;
  }

  public getTeam1Text() {
    return this.team1Text;
  }

  public setTeam2Text(value) {
    this.team2Text = value;
  }

  public getTeam2Text() {
    return this.team2Text;
  }

  public getCurrentTeamText() {
    if(this.getCurrentTeam() == Team.team1) {
      return this.team1Text;
    } else {
      return this.team2Text;
    }
  }

}
