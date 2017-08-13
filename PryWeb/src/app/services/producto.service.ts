import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class ProductoService {

  usuarioSails: string = 'http://port-1337.maferserver-mafersua383643.codeanyapp.com/productos';

  constructor(private _http: Http) { }

  nuevoProducto(producto: Producto){
    const body = JSON.stringify(producto);
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
