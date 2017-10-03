import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GamesSettingsService } from '../../services/gameSettings.service';
import { Settings } from '../../models/settings';

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
      console.log(this.gamesSettingsService.defaultTimer)
  }


  ionViewDidLeave() {
    this.saveSettings();
  }

  public saveSettings() {
    let currentSettings;
    this.storage.get('settings').then((data: Settings) => {
      currentSettings = data;

      let settings: Settings = {
        defaultTimer: this.gamesSettingsService.defaultTimer,
        winningScore: this.gamesSettingsService.winningScore,
        difficultyLevel: this.gamesSettingsService.difficultyLevel
      };
      if (!currentSettings) {
        this.storage.set('settings', settings);
      } else if (JSON.stringify(currentSettings) != JSON.stringify(settings)) {
        this.storage.set('settings', settings);

        let toast = this.toastCtrl.create({
          message: 'Settings Saved!',
          duration: 1000,
          showCloseButton: true,
          dismissOnPageChange: true
        });
        toast.present();
      }
    });
  }

}
