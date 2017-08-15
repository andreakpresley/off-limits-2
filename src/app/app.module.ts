import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RulesPage } from '../pages/rules/rules';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardPage } from '../pages/card/card';
import { ReadyPage } from '../pages/ready/ready';
import { WinnerPage } from '../pages/winner/winner';

import { PlayGameService } from '../services/playGame.service';
import { GlobalVarsService } from '../services/globalVars.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RulesPage,
    SettingsPage,
    HomePage,
    TabsPage,
    CardPage,
    ReadyPage,
    WinnerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RulesPage,
    SettingsPage,
    HomePage,
    TabsPage,
    CardPage,
    ReadyPage,
    WinnerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlayGameService,
    GlobalVarsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
