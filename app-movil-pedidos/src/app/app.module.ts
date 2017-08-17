import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage,MenuTabPage,MainMenuPage, PedidoActualPage, PedidosPage, ProductoPage, PerfilPage, CategoriaPage, LoginPage } from '../pages/index.pages';
import { CategoriasProvProvider } from '../providers/categorias-prov/categorias-prov';
import {HttpModule} from '@angular/http';
import { ProductProvProvider } from '../providers/product-prov/product-prov';
import { UsuarioProvProvider } from '../providers/usuario-prov/usuario-prov';

import { IonicStorageModule } from '@ionic/storage';
import { DetPedidoProvider } from '../providers/det-pedido/det-pedido';
import { CatPedidoProvider } from '../providers/cat-pedido/cat-pedido';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    MenuTabPage,
    MainMenuPage,
    PedidoActualPage ,
    PedidosPage,
    ProductoPage,
    PerfilPage,
    CategoriaPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    MenuTabPage,
    MainMenuPage,
    PedidoActualPage,
    PedidosPage,
    ProductoPage,
    PerfilPage,
    CategoriaPage,
    LoginPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriasProvProvider,
    ProductProvProvider,
    UsuarioProvProvider,
    DetPedidoProvider,
    CatPedidoProvider
  ]
})
export class AppModule {}
