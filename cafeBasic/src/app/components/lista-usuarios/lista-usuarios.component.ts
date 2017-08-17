import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../interfaces/usuario.interfaces';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private _usrService: UsuarioService) {
    this._usrService.consultarUsuario()
      .subscribe(
        resultado => {
          this.usuarios = resultado;
        }
      );
  }

  ngOnInit() {
  }

  eliminar(id: number, posicion: number) {
    this._usrService.eliminarUsuario(id)
      .subscribe(
        resultado => {
          console.log('se eliminó');
          this.usuarios.splice(posicion, 1);
        }
      );
  }

}
