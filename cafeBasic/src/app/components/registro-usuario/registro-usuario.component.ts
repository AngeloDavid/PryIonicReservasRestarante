import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interfaces';
import { UsuarioService } from '../../services/usuario.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  id: string;
  usuario: Usuario = {
    id: 0,
    nom_user: '',
    ape_user: '',
    ema_user: '',
    pass_user: '',
    tip_user: '',
    cel_user: '',
    lat_user: null,
    lon_user: null
  };
  constructor(private _usuarioService: UsuarioService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.usuario);
    this._usuarioService.nuevoUsuario(this.usuario)
      .subscribe(
        resultado => {
          console.dir(resultado);
          this._router.navigate(['/admin', this.usuario.id]);
        },
        error => {
          console.log(error);
        }
      );
  }

  limpiar(){
    this.usuario = {
      id: 0,
      nom_user: '',
      ape_user: '',
      ema_user: '',
      pass_user: '',
      tip_user: '',
      cel_user: '',
      lat_user: null,
      lon_user: null,
    };
  }
}
