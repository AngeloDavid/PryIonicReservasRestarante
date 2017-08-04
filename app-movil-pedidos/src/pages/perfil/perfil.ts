import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private menucrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  mostarMenu(){
    this.menucrl.toggle();
  }

}
