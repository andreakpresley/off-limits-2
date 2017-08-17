import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';
import { GamesSettingsService } from '../../services/gameSettings.service';

@Component({
  selector: 'page-ready',
  templateUrl: 'ready.html'
})
export class ReadyPage {

  constructor(public navCtrl: NavController, private gamesSettingsService: GamesSettingsService) {
  }

  private teamReady() {
    this.navCtrl.setRoot(CardPage);
  }

}
