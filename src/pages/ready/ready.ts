import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';
import { GlobalVarsService } from '../../services/globalVars.service';

@Component({
  selector: 'page-ready',
  templateUrl: 'ready.html'
})
export class ReadyPage {

  private teamName;

  constructor(public navCtrl: NavController, private globalVarsService: GlobalVarsService) {
    this.teamName = globalVarsService.getCurrentTeamText();
  }

  private teamReady() {
    this.navCtrl.setRoot(CardPage);
  }

}
