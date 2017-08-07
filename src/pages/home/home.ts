import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadyPage } from '../ready/ready';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private openReadyPage() {
    //need to clear global score vars
    this.navCtrl.setRoot(ReadyPage);
  }

  private openSettingsPage() {
    this.navCtrl.parent.select(2);
  }

}
