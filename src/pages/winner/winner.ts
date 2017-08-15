import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVarsService } from '../../services/globalVars.service';
import { PlayGameService } from '../../services/playGame.service';

@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html'
})
export class WinnerPage {

  constructor(
    public navCtrl: NavController,
    private globalVarsService: GlobalVarsService,
    private playGameService: PlayGameService) {
  }

}
