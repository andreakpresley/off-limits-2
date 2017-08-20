import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadyPage } from '../ready/ready';
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
    //TODO: not reset timer
    this.navCtrl.setRoot(ReadyPage);
  }

  private endCurrentGame() {
    //TODO: take to a winner page? or no?
    this.gamesSettingsService.isGameBeingPlayed = false;
  }

}
