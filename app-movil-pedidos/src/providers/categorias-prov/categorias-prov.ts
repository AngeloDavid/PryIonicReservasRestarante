import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the CategoriasProvProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CategoriasProvProvider {

  urlcat: string = "http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/categoria";

  constructor(public http: Http) {
    console.log('Hello CategoriasProvProvider Provider');
  }

  consultarCat(){
    return this.http.get(this.urlcat).map(
      resp => {
        return resp.json();
      });
  }

}
