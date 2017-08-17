import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from '../../interfaces/user.module';


/*
  Generated class for the UsuarioProvProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsuarioProvProvider {



  urlBDD: string ="http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/Usuario";
  constructor(public http: Http) {
    console.log('Hello UsuarioProvProvider Provider');
  }

  public loginUSer(username:string, password:string){
    let url=this.urlBDD+"/login?username="+username+"&password="+password;
    return this.http.get(url).map(
      resp=>{
        return resp.json();
      });
  };

  public getUser(id:number){
    return this.http.get(this.urlBDD+"/"+id).map(
      resp=>{
        return resp.json();
      }
    );
  }

  public updateUSer(UserUp:User){
    let datos= JSON.stringify(UserUp);
    return this.http.post(this.urlBDD+"/"+UserUp.id,datos).map(
      resp=>{
        return resp.json();
      }
    );
  }

}
