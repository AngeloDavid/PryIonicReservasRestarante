import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Producto} from '../../interfaces/producto.module';

/**
 * Generated class for the ProductoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  product:Producto;
  tap: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product= this.navParams.get("param");
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  tapEvent(e) {
    this.tap++;
  }
  tapEvent2(e) {
    this.tap--;
  }


}
