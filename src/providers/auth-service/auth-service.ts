import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from "rxjs";

import 'rxjs/add/operator/map';
import {TurboCampusConfigProvider} from "../turbo-campus-config/turbo-campus-config";
import {HttpProvider} from "../http/http";



export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

// interface HttpProviderResult{
//   data: any;
// }

@Injectable()
export class AuthServiceProvider {

  currentUser: User;
  private loginRoot: string;
  // private result: HttpProviderResult = <any>{};

  constructor(public http: HttpClient, private turboCampusConfig: TurboCampusConfigProvider, public httpProvider: HttpProvider) {
    this.loginRoot = turboCampusConfig.getApiRoot() + "login";
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {

        const body = {username: credentials.email, password: credentials.password};

        this.httpProvider.post(this.loginRoot, body).subscribe(
          (result: any) => {
            // console.log(result);


            if(result.data) {
              var accessToken = result.data.api_token;

              console.log("Access Token: " + accessToken);
            }

            observer.next(true);
            observer.complete();
          },
          err => {
            console.log(err);

            observer.next(false);
            observer.complete();
          },
            () => console.log('getData completed')
        );


        // let access = (credentials.password === "pass" && credentials.email === "email");
        // this.currentUser = new User('Simon', 'saimon@devdactic.com');
        // observer.next(access);
        // observer.complete();
      });
    }
  }


  private setAccessToken(){
    // localstorage.
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
