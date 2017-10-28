import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  public result = '';

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen, 
    private admobFree: AdMobFree) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.admobFree.banner.config(bannerConfig);
      
          this.admobFree.banner.prepare()
            .then((value) => {
              console.log('ads ready')
              this.result = value + ' ad is ready'
              // banner Ad is ready
              // if we set autoShow to false, then we will need to call the show method here
            })
            .catch(e => this.result = e + ' ad error');
    });

    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: false,
      autoShow: true,
      id: 'ca-app-pub-5035764387204735/5224848398',
      bannerAtTop: true
    };
    
  }
}
