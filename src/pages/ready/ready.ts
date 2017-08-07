import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';
import { PlayGameService } from '../../services/playGame.service';

@Component({
  selector: 'page-ready',
  templateUrl: 'ready.html'
})
export class ReadyPage {

  constructor(public navCtrl: NavController, private playGameService: PlayGameService) {
  }

  private openCardPage() {
    // this.playGameService.playGame();
    this.navCtrl.setRoot(CardPage);
  }

  private teamReady() {
    // this.navCtrl.setRoot(CardPage);
    // this.playGameService.playGame();
    // this.navCtrl.push(CardPage)
    this.navCtrl.setRoot(CardPage);
  }



}
