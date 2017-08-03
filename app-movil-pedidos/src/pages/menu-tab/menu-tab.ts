import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../index.pages';
/**
 * Generated class for the MenuTabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu-tab',
  templateUrl: 'menu-tab.html',
})
export class MenuTabPage {
  tab1:any =MenuPage;
  tab2:any =MenuPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTabPage');
  }

}
