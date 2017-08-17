import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class CategoriaService {

  urlCategoria: string = ' http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/categoria ';
  constructor(private _http: Http) { }

  consultarCat() {
    return this._http.get(this.urlCategoria).map(
      resp => {
        return resp.json();
      });
  }

  nuevaCateg(categ: Categoria) {
    const body = JSON.stringify(categ);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.urlCategoria, body, {headers: headers})
      .map(
        res => {
          console.log(res.json());
          return res.json;
        }
      );
  }

  //todas las categorias
  mostrarCateg() {
    return this._http.get(`${this.urlCategoria}`).map(
      resultado => {
        return resultado.json();
      }
    );
  }

  editarCateg( categ: Categoria, id: number) {
    let body = JSON.stringify(categ);
    //console.log(body);
    let headers1 = new Headers({
      'Content-type': 'application/json'
    });
    let url_edit: string = `${this.urlCategoria}/${id}`;
    return this._http.put(url_edit, body, {headers: headers1}).map(
      resultado => {
        return resultado.json();
      }
    );
  }

  eliminarCateg(key$: number) {
    let url_delete = `${this.urlCategoria}/${key$}`;
    return this._http.delete(url_delete).map(
      resultado => {
        return resultado.json();
      }
    );
  }

  obtenerCateg( index: string) {
    let url_get = `${this.urlCategoria}/${index}`;
    return this._http.get(url_get).map(
      resultado => {
        return resultado.json();
      }
    );
  }

}
