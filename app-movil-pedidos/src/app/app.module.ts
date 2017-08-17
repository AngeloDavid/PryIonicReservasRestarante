import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {MenuPage,MenuTabPage,MainMenuPage, PedidoActualPage, PedidosPage, ProductoPage, PerfilPage, CategoriaPage } from '../pages/index.pages';
import { CategoriasProvProvider } from '../providers/categorias-prov/categorias-prov';
import {HttpModule} from '@angular/http';
import { ProductProvProvider } from '../providers/product-prov/product-prov';

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
    CategoriaPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    CategoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriasProvProvider,
    ProductProvProvider
  ]
})
export class AppModule {}
