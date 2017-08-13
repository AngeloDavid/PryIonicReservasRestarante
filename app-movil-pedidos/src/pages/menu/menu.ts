import { Component } from '@angular/core';
import { NavController, NavParams,MenuController, ModalController } from 'ionic-angular';
import {PedidoActualPage} from '../../pages/index.pages';
import {ProductProvProvider} from '../../providers/product-prov/product-prov';
import {Producto} from "../../interfaces/producto.module";
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

  data:any="";
  listaProducts:Producto[]=[];
  category:Producto[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private menucrl: MenuController, private modalctrl: ModalController,
              private prod_provCtrl: ProductProvProvider) {

    this.data = navParams.data;
    //this.listaProducts = navParams.data;
    console.log("id categoria");
    console.log(this.data);

    this.prod_provCtrl.consultarProd().subscribe(
      resp=>{
         this.category=resp;
        console.log('desde menu.ts');
        console.log(this.category[0].fkPro_cat.id);


        for(let i=0; i<this.category.length;i++){
          if(this.data == this.category[i].fkPro_cat.id){
            if(this.category[i].img_pro!=null){
              this.listaProducts.push(this.category[i]);
              console.log(this.category[i]);
            }else{
              this.category[i].img_pro =  'https://i2.wp.com/umeepn.files.wordpress.com/2015/11/dulcini.jpg';
              this.listaProducts.push(this.category[i]);
            }

          }
          /*console.log('dentro for');
          //console.log(this.listaProducts[0].tit_pro);
          /*console.log(this.category[i].prods_cat);*/
        }
        /*console.log('productos de categoria');
        console.log(this.category);*/


      });

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
