import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {AvvisoDetailPage} from "../avviso-detail/avviso-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notifications: Array<any>;

  constructor(public navCtrl: NavController, public httpProvider: HttpProvider) {

    this.notifications = [
      {"id": "1", "text": "Nuovo messaggio sul forum", "user": "Roberto Otupacca", "creation_date": "2018.03.12"},
      {"id": "2", "text": "Test aggiunto alla piattaforma", "user": "Simone Giudice", "creation_date": "2018.03.15"},
      {"id": "3", "text": "Assenza professore XXX", "user": "Prisca Stacchi", "creation_date": "2018.04.08"},
      {"id": "4", "text": "Nuovo messaggio sul forum", "user": "Roberto Otupacca", "creation_date": "2018.04.12"},
      {"id": "5", "text": "Assenza professore XXX", "user": "Simone Giudice", "creation_date": "2018.05.01"},
      {"id": "6", "text": "Assenza professore XXX", "user": "Roberto Otupacca", "creation_date": "2018.05.28"}
    ];

  }


  avvisoDetail(notification){

    this.navCtrl.push(AvvisoDetailPage, {
      avviso: notification
    });

  }



}
