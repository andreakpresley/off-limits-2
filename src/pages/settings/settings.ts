import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GamesSettingsService } from '../../services/gameSettings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {


  constructor(
    public navCtrl: NavController, 
    private gamesSettingsService: GamesSettingsService, 
    private storage: Storage,
    private toastCtrl: ToastController) {
  }


  ionViewDidLeave() { 
    this.saveSettings();
  }

  public saveSettings() {
    let settings = {
      seconds: this.gamesSettingsService.seconds,
      winningScore: this.gamesSettingsService.winningScore,
      difficultyLevel: this.gamesSettingsService.difficultyLevel
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

}
