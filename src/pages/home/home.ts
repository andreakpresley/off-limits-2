import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadyPage } from '../ready/ready';
import { GlobalVarsService } from '../../services/globalVars.service';
import { PlayGameService } from '../../services/playGame.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private globalVarsService: GlobalVarsService, private playGameService: PlayGameService) {
  }

  private startNewGame() {
    this.navCtrl.setRoot(ReadyPage);
    this.playGameService.isGameBeingPlayed = true;
    this.globalVarsService.resetTeamScores();
  }

  private continueGame() {
    //TODO: not reset timer
    this.navCtrl.setRoot(ReadyPage);
  }

  private endCurrentGame() {
    //TODO: take to a winner page? or no?
    this.playGameService.isGameBeingPlayed = false;
  }

}
