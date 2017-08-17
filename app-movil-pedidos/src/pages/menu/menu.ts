import { Component } from '@angular/core';
import { NavController, NavParams,MenuController, ModalController, PopoverController } from 'ionic-angular';
import {PedidoActualPage, ProductoPage} from '../../pages/index.pages';
import {ProductProvProvider} from '../../providers/product-prov/product-prov';
import {Producto} from "../../interfaces/producto.module";
import {Det_pedido} from "../../interfaces/Det_pedido.module";
import { Storage } from '@ionic/storage';

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
  listaProducts_menu:Producto[]=[];
  category:Producto[]=[];
  id_Cat:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private menucrl: MenuController, private modalctrl: ModalController,
              private prod_provCtrl: ProductProvProvider, private pop_Ctrl:PopoverController,public storage: Storage ) {

    this.id_Cat= this.navParams.get("params");
    this.data = navParams.data;

    this.prod_provCtrl.consultarProd().subscribe(
      resp=>{
        this.category=resp;
        //Para la página categorias
        for(let i=0; i<this.category.length;i++) {
          if (this.id_Cat == this.category[i].fkPro_cat.id) {
            if (this.category[i].img_pro != null) {
              this.listaProducts_menu.push(this.category[i]);
              console.log(this.category[i]);
            } else {
              this.category[i].img_pro = 'https://i2.wp.com/umeepn.files.wordpress.com/2015/11/dulcini.jpg';
              this.listaProducts_menu.push(this.category[i]);
            }
          }
        }


        //Para los tabs
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

        }


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

  popProducto(product:Producto){
    let popover = this.pop_Ctrl.create(ProductoPage,{'param':product});
    popover.present();
  }

  pedir(i:number){
    let producto:Producto=this.listaProducts[i];

    let DetP:Det_pedido = {
      cant_det:1,
      st_Det:producto.pre_pro ,
      fk_Prod_de:{id:producto.id,
                  tit:producto.tit_pro,
                  pre:producto.pre_pro,
                  tam:producto.tam_pro
      }
    };

    this.storage.get('indice').then(resp=>{
       let index=resp;
      console.log(index+"pedido");
       this.storage.set(index+'',DetP);
       index++;
       this.storage.set('indice',index);
    });


    //
  }

}
