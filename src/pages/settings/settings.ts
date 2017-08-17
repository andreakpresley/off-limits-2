import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GlobalVarsService } from '../../services/globalVars.service';
import { PlayGameService } from '../../services/playGame.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  private team1Name:string;
  private team2Name:string;

  constructor(
<<<<<<< HEAD
    public navCtrl: NavController, 
    private globalVarsService: GlobalVarsService, 
    private playGameService: PlayGameService,
    private storage: Storage,
    private toastCtrl: ToastController) {
=======
    public navCtrl: NavController,
    private globalVarsService: GlobalVarsService,
    private playGameService: PlayGameService) {
>>>>>>> master
    this.team1Name = globalVarsService.getTeam1Text();
    this.team2Name = globalVarsService.getTeam2Text();
  }


  ionViewDidLeave() { 
    this.saveSettings;
  }

  public saveSettings() {
    let settings = {
      defaultTimer: this.playGameService.defaultTimer,
      winningScore: this.playGameService.winningScore,
      easyDifficulty: this.playGameService.easyDifficulty
    };
    this.storage.set('settings', settings);

    let toast = this.toastCtrl.create({
      message: 'Settings Saved!',
      duration: 1000,
      showCloseButton: true,
      dismissOnPageChange: true
    });
    toast.present();
  }

  private team1NameChanged() {
    this.globalVarsService.setTeam1Text(this.team1Name);
  }

  private team2NameChanged() {
    this.globalVarsService.setTeam2Text(this.team2Name);
  }

}
