import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {DetPedidoProvider} from '../../providers/det-pedido/det-pedido';
import {CatPedidoProvider} from '../../providers/cat-pedido/cat-pedido';
import {Producto} from '../../interfaces/producto.module';
import {Det_pedido} from '../../interfaces/Det_pedido.module';
import {Cab_pedido} from '../../interfaces/Cab_pedido.module';
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

  list:any[]=[];
  pedidos:Det_pedido[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storge:Storage, private detpro:DetPedidoProvider,private catpro:CatPedidoProvider) {

    console.log(storge.length());
    console.log('hola');

    storge.keys().then(keys=>{
      console.log('kesy',keys);
       for(let key of keys){
         if(key!="indice" && key !="id"){
           storge.get(key).then((val) => {
             console.log(val.cant_det);
             this.pedidos.push(val);

           });

         }

       }
      console.log("lista",this.pedidos);
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoActualPage');
  }

  closemodal(){
    this.navCtrl.pop();
  }

  pedir(){
    this.storge.get('id').then(resp=>{
      let cab:Cab_pedido={
        fec_cab: new Date(),
        fkUse_cab:{
          id:resp
        }
      };
      this.catpro.addPedidoCab(cab).subscribe(
        resp=>{
          console.log(resp);
        }
      );

      for(let pedi of this.pedidos){
        //pedi.fkCab_det.id=1;
        this.detpro.AddPedido(pedi).subscribe(
          resp=>{
            console.log(resp);
          }
        );

      }
    });







  }

}
