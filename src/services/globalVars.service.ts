import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVarsService {

  private team1score;
  private team2score;

  constructor() {
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

}
