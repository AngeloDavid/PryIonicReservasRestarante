import { Component } from '@angular/core';
import { NavController, NavParams, MenuController,Events,ToastController } from 'ionic-angular';
import {UsuarioProvProvider} from '../../providers/usuario-prov/usuario-prov';
import {User} from '../../interfaces/user.module';

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  userInfo:User = {
    id:0,
    nom_user: "",
    ape_user: "",
    ema_user: "",
    pass_user: "",
    tip_user: '',
    cel_user: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private menucrl: MenuController,events: Events,private userCrtl: UsuarioProvProvider,private  toastCtrl:ToastController) {
    this.userCrtl.getUser(this.navParams.get('idUser')).subscribe(resp=>{
      this.userInfo=resp;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  mostarMenu(){
    this.menucrl.toggle();
  }
  guardarDatos(){
    this.userCrtl.updateUSer(this.userInfo).subscribe(
      resp=>{
        this.mostrar_Msg("Datos Actualizados");

      }
    );
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
