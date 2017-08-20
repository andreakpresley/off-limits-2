import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamesSettingsService } from '../../services/gameSettings.service';

@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html'
})
export class WinnerPage {

  constructor(
    public navCtrl: NavController,
    private gamesSettingsService: GamesSettingsService) {
  }

}
