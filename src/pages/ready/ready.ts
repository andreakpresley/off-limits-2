import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-ready',
  templateUrl: 'ready.html'
})
export class ReadyPage {

  constructor(public navCtrl: NavController) {

  }

  private openCardPage() {
    this.navCtrl.setRoot(CardPage);
  }

}
