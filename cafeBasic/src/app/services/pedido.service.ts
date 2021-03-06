import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class PedidoService {

  pedidoSails: string = 'http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/det_pedido';

  constructor(private _http: Http) { }

  nuevoPedido(pedido: Pedido){
    const body = JSON.stringify(pedido);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.pedidoSails, body, {headers: headers})
      .map(
        res => {
          console.log(res.json());
          return res.json;
        }
      );
  }

  consultarPedido() {
    return this._http.get(this.pedidoSails)
      .map(
        res => {
          return res.json();
        }
      );
  }

}
