import { Component } from '@angular/core';

import { AnotherPage } from '../anotherPage/anotherPage';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AnotherPage;

  constructor(public navCtrl: NavController) {

  }

  forceHome() {
    this.navCtrl.setRoot(HomePage);

    //Uncomment below to see the tabs, but freeze the screen from going anywhere
    // this.navCtrl.setRoot(TabsPage);
  }
}
