import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadyPage } from '../ready/ready';
import { WinnerPage } from '../winner/winner';
import { GamesSettingsService } from '../../services/gameSettings.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private gamesSettingsService: GamesSettingsService) {
  }

  private startNewGame() {
    this.navCtrl.setRoot(ReadyPage);
    this.gamesSettingsService.isGameBeingPlayed = true;
    this.gamesSettingsService.resetTeamScores();
  }

  private continueGame() {
    this.navCtrl.setRoot(ReadyPage);
  }

  private endCurrentGame() {
    this.gamesSettingsService.isGameBeingPlayed = false;
    this.navCtrl.setRoot(WinnerPage);
  }

}
