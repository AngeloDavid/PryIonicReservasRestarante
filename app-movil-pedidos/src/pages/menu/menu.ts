import { Component } from '@angular/core';
import { NavController, NavParams,MenuController, ModalController } from 'ionic-angular';
import {PedidoActualPage} from '../../pages/index.pages';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private menucrl: MenuController, private modalctrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  mostarMenu(){
    this.menucrl.toggle();
  }

  mostrarPedido(){
    let modal= this.modalctrl.create(PedidoActualPage);
    modal.present();
  }

}
