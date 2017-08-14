import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVarsService } from '../../services/globalVars.service';
import { PlayGameService } from '../../services/playGame.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  private team1Name:string;
  private team2Name:string;
  private timerLength:number;

  constructor(
    public navCtrl: NavController, 
    private globalVarsService: GlobalVarsService, 
    private playGameService: PlayGameService) {
    this.team1Name = globalVarsService.getTeam1Text();
    this.team2Name = globalVarsService.getTeam2Text();
    this.timerLength = this.playGameService.seconds;
  }

  public saveSettings() {
    this.playGameService.defaultTimer = this.timerLength;
  }

  private team1NameChanged() {
    this.globalVarsService.setTeam1Text(this.team1Name);
  }

  private team2NameChanged() {
    this.globalVarsService.setTeam2Text(this.team2Name);
  }

}
