import { Component } from '@angular/core';
import { Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UsuarioProvProvider} from '../providers/usuario-prov/usuario-prov';
import {User} from '../interfaces/user.module';
//import { HomePage } from '../pages/home/home';

import {MenuTabPage,PerfilPage,PedidoActualPage, CategoriaPage, LoginPage} from '../pages/index.pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  menu:any =MenuTabPage;
  perfil:any=PerfilPage;
  Pedido:any=PedidoActualPage;
  category: any= CategoriaPage;

  userInfo:User = {
    id:0,
    nom_user: "",
    ape_user: "",
    ema_user: "",
    pass_user: "",
    tip_user: '',
    cel_user: ''
  };
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menucrl:MenuController , private userCrtl: UsuarioProvProvider) {

    this.userCrtl.getUser(1).subscribe(resp=>{
      console.log('app.componet');
      this.userInfo=resp;
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

}

