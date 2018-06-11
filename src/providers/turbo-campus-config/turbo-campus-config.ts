import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TurboCampusConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TurboCampusConfigProvider {


  private apiRoot: string;

  constructor(public http: HttpClient) {
    this.apiRoot = "http://localhost/lms/public/api/";
  }

  getApiRoot() {
    return this.apiRoot;
  };

}
