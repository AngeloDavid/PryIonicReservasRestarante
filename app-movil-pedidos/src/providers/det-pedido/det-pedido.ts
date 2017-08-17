import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Det_pedido} from '../../interfaces/Det_pedido.module';

/*
  Generated class for the DetPedidoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DetPedidoProvider {

  urlBDD="http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/Det_pedido";

  constructor(public http: Http) {
    console.log('Hello DetPedidoProvider Provider');
  }

  public AddPedido(detPed:Det_pedido){
    let datos= JSON.stringify(detPed);
    return this.http.post(this.urlBDD+"/",datos).map(
      resp=>{
        return resp.json();
      }
    );
  }

  public updatePedido(detPed:Det_pedido){
    let datos= JSON.stringify(detPed);
    return this.http.post(this.urlBDD+"/"+detPed.id,datos).map(
      resp=>{
        return resp.json();
      }
    );
  }





}
