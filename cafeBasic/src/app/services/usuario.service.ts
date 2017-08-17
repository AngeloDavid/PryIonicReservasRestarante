import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interfaces';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';


@Injectable()
export class UsuarioService {

  usuarioSails:string= 'http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/Usuario';

  constructor(private _http: Http) { }

  nuevoUsuario(usuario: Usuario)  {
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

  getUsuarios(indice: string) {
    let url = `${this.usuarioSails}/${ indice}`;
    return this._http.get(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  editarUsuario(usuario: Usuario, id: string) {
    let body= JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.usuarioSails}/${id}`;
    return this._http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }

  eliminarUsuario(key$: number) {
    let url = `${this.usuarioSails}/${key$}`;
    return this._http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  consultarUsuario() {
    return this._http.get(this.usuarioSails)
      .map(
        res => {
          return res.json();
        }
      );
  }

}
