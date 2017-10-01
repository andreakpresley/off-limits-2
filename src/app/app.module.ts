import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { RulesPage } from '../pages/rules/rules';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardPage } from '../pages/card/card';
import { ReadyPage } from '../pages/ready/ready';
import { WinnerPage } from '../pages/winner/winner';

import { GamesSettingsService } from '../services/gameSettings.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

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
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    AdMobFree,
    GamesSettingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
