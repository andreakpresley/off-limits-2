import { Component } from '@angular/core';

import { RulesPage } from '../rules/rules';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RulesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
