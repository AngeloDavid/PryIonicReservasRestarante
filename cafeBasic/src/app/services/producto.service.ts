import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class ProductoService {

  productoSails: string = 'http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/producto';


  constructor(private _http: Http) { }

  nuevoProducto(producto: Producto){
    const body = JSON.stringify(producto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.productoSails, body, {headers: headers})
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  consultarProdSails() {
    return this._http.get(this.productoSails)
      .map(
        res => {
          return res.json();
        }
      );
  }

  getProd(indice: string) {
    let urls = `${this.productoSails}/${ indice}`;
    return this._http.get(urls)
      .map(
        res => {
          return res.json();
        }
      );
  }

  editarProd(producto: Producto, id: string) {
    let body= JSON.stringify(producto);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.productoSails}/${id}`;
    return this._http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }

  eliminarProd(key$: string) {
    let url = `${this.productoSails}/${key$}`;
    return this._http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

}
