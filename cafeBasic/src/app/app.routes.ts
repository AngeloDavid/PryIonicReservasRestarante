/**
 * Created by norika on 03/08/2017.
 */
import { RouterModule, Routes} from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdminComponent } from './components/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { DiarioComponent } from './components/diario/diario.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistroProducComponent } from './components/registro-produc/registro-produc.component';
import { RegistroPedidoComponent } from './components/registro-pedido/registro-pedido.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const APP_ROUTES: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'cajero', component: CajeroComponent},
  { path: 'diario', component: DiarioComponent},
  { path: 'registrousuario/:id', component: RegistroUsuarioComponent},
  { path: 'registroproducto', component: RegistroProducComponent},
  { path: 'registropedido', component: RegistroPedidoComponent},
  { path: 'prueba', component: PruebaComponent},
  { path: 'listausers', component: ListaUsuariosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'principal' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
