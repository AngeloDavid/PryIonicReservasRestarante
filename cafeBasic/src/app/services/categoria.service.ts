import { Injectable } from '@angular/core';
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
}
