import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

import {UsuarioService} from './services/usuario.service';
import { ProductoService } from './services/producto.service';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdminComponent } from './components/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistroProducComponent } from './components/registro-produc/registro-produc.component';
import { DiarioComponent } from './components/diario/diario.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AdminComponent,
    CajeroComponent,
    RegistroUsuarioComponent,
    RegistroProducComponent,
    DiarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UsuarioService,
    ProductoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
