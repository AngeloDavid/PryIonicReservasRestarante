import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasProvProvider} from '../../providers/categorias-prov/categorias-prov';
import { Categoria} from '../../interfaces/categoria.module';
import { MenuPage } from '../index.pages';
/**
 * Generated class for the CategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  categories: Categoria[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private cat_prov: CategoriasProvProvider) {
    this.cat_prov.consultarCat().subscribe(
      resp => {
        this.categories=resp;
        console.log(this.categories);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  verProducts(id:number){
    console.log(id);
    this.navCtrl.push(MenuPage,{'params':id});
  }

}
