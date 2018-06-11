import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    // console.log('Provider creato');
  }

  public getJSON(url){
    return this.http.get(url.toString()).map(res => res);
  }

  public post(url, jsonParams){
    return this.http.post(url, jsonParams).map(res => res);
  }


}
