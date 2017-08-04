import { Component } from '@angular/core';
import { Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {MenuTabPage,PerfilPage,PedidoActualPage} from '../pages/index.pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuTabPage;
  menu:any =MenuTabPage;
  perfil:any=PerfilPage;
  Pedido:any=PedidoActualPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menucrl:MenuController) {
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

