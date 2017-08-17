import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';
import { GamesSettingsService } from '../../services/gameSettings.service';

@Component({
  selector: 'page-ready',
  templateUrl: 'ready.html'
})
export class ReadyPage {

  private teamName;

  constructor(public navCtrl: NavController, private gamesSettingsService: GamesSettingsService) {
    this.teamName = this.gamesSettingsService.currentTeam;
  }

  private teamReady() {
    this.navCtrl.setRoot(CardPage);
  }

}
