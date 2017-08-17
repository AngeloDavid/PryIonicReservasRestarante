import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Cab_pedido} from '../../interfaces/Cab_pedido.module';

/*
  Generated class for the CatPedidoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CatPedidoProvider {

  urlBDD="http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/Cat_pedido";

  constructor(public http: Http) {
    console.log('Hello CatPedidoProvider Provider');
  }

  public addPedidoCab(catPed:Cab_pedido){
    let datos= JSON.stringify(catPed);
    return this.http.post(this.urlBDD,datos).map(
      resp=>{
        return resp.json();
      }
    );
  }



}
