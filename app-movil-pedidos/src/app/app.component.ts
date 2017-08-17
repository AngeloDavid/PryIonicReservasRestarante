import { Component,ViewChild  } from '@angular/core';
import { Platform,MenuController,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UsuarioProvProvider} from '../providers/usuario-prov/usuario-prov';
import {User} from '../interfaces/user.module';
import { NavController } from 'ionic-angular';
//import { HomePage } from '../pages/home/home';

import {MenuTabPage,PerfilPage,PedidoActualPage, CategoriaPage, LoginPage} from '../pages/index.pages';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('mycontent') nav: NavController ;
  rootPage:any = LoginPage;
  menu:any =MenuTabPage;
  perfil:any=PerfilPage;
  Pedido:any=PedidoActualPage;
  category: any= CategoriaPage;
  login:any=LoginPage;

  userInfo:User = {
    id:0,
    nom_user: "",
    ape_user: "",
    ema_user: "",
    pass_user: "",
    tip_user: '',
    cel_user: ''
  };
  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menucrl:MenuController , private userCrtl: UsuarioProvProvider,storage: Storage,events: Events) {

   events.subscribe('user:login',(idUser)=>{
     console.log("envent app idUSer",idUser);
     this.userCrtl.getUser(idUser).subscribe(resp=>{
       this.userInfo=resp;
     });

   });




    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  irpagina(page: any){
    this.rootPage=page;
    this.menucrl.close();
  }

  irpaginaPer(){
    this.nav.setRoot(PerfilPage,{'idUser':this.userInfo.id});
    this.menucrl.close();
  }


}

