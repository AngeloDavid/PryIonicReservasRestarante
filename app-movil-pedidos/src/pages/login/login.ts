import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UsuarioProvProvider} from '../../providers/usuario-prov/usuario-prov';
import { ToastController,Events } from 'ionic-angular';
import {MenuTabPage} from '../menu-tab/menu-tab';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: any={
    username :null,
    password: null
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProv: UsuarioProvProvider, private  toastCtrl:ToastController, public events:Events,public storage: Storage ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){
    /*console.log(this.userProv.login(this.usuario.username,this.usuario.password));
    this.navCtrl.setRoot(MenuTabPage);*/
    console.log(this.usuario);
    if(this.usuario.username==null || this.usuario.password==null){
      this.mostrar_Msg("Ingrese los datos");
    }else {
      this.userProv.loginUSer(this.usuario.username,this.usuario.password).subscribe(
        resp=>{
          if(resp.id !=-1){
            this.navCtrl.setRoot(MenuTabPage);
            this.events.publish('user:login',resp.id);
            this.storage.clear();
            this.storage.set('indice',0);
            this.storage.set('id',resp.id);

          }
        }
      );
    }
    //
  }

  mostrar_Msg(msg:string) {
    const toast = this.toastCtrl.create({
      message:msg,
      showCloseButton: true,
      closeButtonText: 'Ok',
      duration: 4000
    });
    toast.present();
  }


}
