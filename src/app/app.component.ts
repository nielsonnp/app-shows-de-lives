import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaDeLivesPage } from '../pages/lista-de-lives/lista-de-lives';



//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
//para abrir o tabs-controller

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = ListaDeLivesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
