import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the ProductProvProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductProvProvider {

  url_prod:string="http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/producto";
  constructor(public http: Http) {
    console.log('Hello ProductProvProvider Provider');
  }

  consultarProd(){
    return this.http.get(this.url_prod).map(
      resp => {
        return resp.json();
      });
  }

}
