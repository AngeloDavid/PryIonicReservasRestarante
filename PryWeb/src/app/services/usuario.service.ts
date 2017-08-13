import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interfaces';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';


@Injectable()
export class UsuarioService {

  usuarioSails: string = 'http://port-1337.maferserver-mafersua383643.codeanyapp.com/registro';

  constructor(private _http: Http) { }

  nuevoUsuario(usuario: Usuario){
    const body = JSON.stringify(usuario);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.usuarioSails, body, {headers: headers})
      .map(
        res => {
          console.log(res.json());
          return res.json;
        }
      );
  }

}
