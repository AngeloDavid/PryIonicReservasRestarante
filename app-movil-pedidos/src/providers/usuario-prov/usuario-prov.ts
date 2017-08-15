import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from '../../interfaces/user.module';
import {observable} from "rxjs/symbol/observable";

/*
  Generated class for the UsuarioProvProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsuarioProvProvider {

  userSession: User;

  urlBDD: string ="http://port-3000.prydusini-angelodavid95426006.codeanyapp.com/Usuario";
  constructor(public http: Http) {
    console.log('Hello UsuarioProvProvider Provider');
  }

  /*public login(username:string, password:string){
    let url=this.urlBDD+"/login?username="+username+"&password="+password;
    return this.http.get(url).map(
      resp=>{
        return resp.json();
      }
    ).subscribe(
      resp=>{
        if(resp.id !=-1){

          Observable.create(observer=>{
            this.userSession =resp;
            observer.next(true);
            observer.complete();
          });
        }

      }
    );
  }*/

  public loginUSer(username:string, password:string){
    let url=this.urlBDD+"/login?username="+username+"&password="+password;
    return this.http.get(url).map(
      resp=>{
        return resp.json();
      });
  };
  public login(username:string, password:string){

   this.loginUSer(username,password).subscribe(
     resp=>{
     if(resp.id !=-1){

     return Observable.create(observer=>{
     this.userSession =resp;
     observer.next(true);
     observer.complete();
     });
     }

     }
   );
   };
  public get_user():User{
    return this.userSession;
  }


  public logout(){
    return Observable.create(observer=>{
      this.userSession=null;
      observer.next(true);
      observer.complete();
    })
  }

}
