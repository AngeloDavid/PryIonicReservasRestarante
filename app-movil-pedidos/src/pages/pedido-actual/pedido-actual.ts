import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedidoActualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pedido-actual',
  templateUrl: 'pedido-actual.html',
})
export class PedidoActualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoActualPage');
  }

  closemodal(){
    this.navCtrl.pop();
  }
}
