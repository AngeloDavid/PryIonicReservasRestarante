import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../index.pages';
import {Categoria} from '../../interfaces/categoria.module';
import {CategoriasProvProvider} from '../../providers/categorias-prov/categorias-prov';
import {UsuarioProvProvider} from '../../providers/usuario-prov/usuario-prov';
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
  cat=1;
  tabs: any[] = [];
  tab_cat:Categoria[]=[];
  //tab_ct: any []=[MenuPage,MenuPage,MenuPage] ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private cat_provCtrl: CategoriasProvProvider,private userProv: UsuarioProvProvider) {
    console.log("hola");

    this.userProv.getUser(this.navParams.get("params")).subscribe(
      resp=>{console.log(resp)}
    );



    //console.log(this.tab_ct + 'tab1');
    this.cat_provCtrl.consultarCat().subscribe(
      resp => {
        this.tab_cat = resp;
        console.log('luego de eliminar');
        this.tab_cat.splice(0,1);
        console.log(this.tab_cat);
        for(let i=0; i < this.tab_cat.length ; i++){
          //this.tabs[i] = MenuPage;
          this.tabs.push({
              id: this.tab_cat[i].id,
              des_cat: this.tab_cat[i].des_cat,
              prods_cat : this.tab_cat[i].prods_cat,
              //page: MenuPage,
          });
        }
        //console.log("menu tabs");
        //console.log(this.tabs);

        /*let lenght=this.tabs.length;
        console.log(lenght);*/
      });





  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTabPage');
  }

}
