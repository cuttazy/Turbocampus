import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TurboCampusConfigProvider} from "../turbo-campus-config/turbo-campus-config";
import {HttpProvider} from "../http/http";

/*
  Generated class for the NotificationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationServiceProvider {

  private loginRoot: string;
  private result: any;

  constructor(public http: HttpClient, private turboCampusConfig: TurboCampusConfigProvider, public httpProvider: HttpProvider) {
    this.loginRoot = turboCampusConfig.getApiRoot() + "notifications";
    this.result = {data: null}
  }

}
