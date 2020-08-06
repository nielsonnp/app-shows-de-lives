

import { Push } from '@ionic-native/push';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LivesPage } from '../pages/lives/lives';
import { SobrePage } from '../pages/sobre/sobre';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ListaDeLivesPage } from '../pages/lista-de-lives/lista-de-lives';
import { HomePage } from './../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';



@NgModule({
  declarations: [
    MyApp,
    LivesPage,
    SobrePage,
    TabsControllerPage,
    ListaDeLivesPage, HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LivesPage,
    SobrePage,
    TabsControllerPage,
    ListaDeLivesPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}