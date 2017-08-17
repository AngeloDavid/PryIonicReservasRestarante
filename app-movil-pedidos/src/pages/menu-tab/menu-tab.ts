import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../index.pages';
import {Categoria} from '../../interfaces/categoria.module';
import {CategoriasProvProvider} from '../../providers/categorias-prov/categorias-prov';
import {UsuarioProvProvider} from '../../providers/usuario-prov/usuario-prov';
import { PopoverController } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';


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
  tab2:any=CategoriaPage;
  cat=1;
  lencat:number=3;
  tabs: any[] = [];
  tab_cat:Categoria[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private cat_provCtrl: CategoriasProvProvider,private userProv: UsuarioProvProvider,private  popCtrl:PopoverController) {
    console.log("hola");

    this.cat_provCtrl.consultarCat().subscribe(
      resp => {
        this.tab_cat = resp;
        this.tab_cat.splice(0,1);

        for(let i=0; i < this.lencat ; i++){
          this.tabs.push({
              id: this.tab_cat[i].id,
              des_cat: this.tab_cat[i].des_cat,
              prods_cat : this.tab_cat[i].prods_cat,
          });
        }
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTabPage');
  }

  mostrarmasCateg(){
    let popover = this.popCtrl.create(CategoriaPage);
    popover.present();
  }

}
