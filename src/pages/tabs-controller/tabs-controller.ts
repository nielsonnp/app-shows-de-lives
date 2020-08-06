
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LivesPage } from '../lives/lives';
import { ListaDeLivesPage } from './../lista-de-lives/lista-de-lives';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LivesPage;
  tab2Root: any = ListaDeLivesPage;
  tab3Root: any = SobrePage;
  constructor(public navCtrl: NavController) {
  }
  
}
