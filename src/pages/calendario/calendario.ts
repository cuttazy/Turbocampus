import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalendarComponentOptions} from "ion2-calendar";
import {CalendarioDetailPage} from "../calendario-detail/calendario-detail";

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {

  public appointments: any;
  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.appointments = [];
    this.setStaticAppointments();

  }

  onChange($event) {
    console.log($event);
  }

  /**
   * Metodo di test statico
   * TODO: Connect to WebService
   */
  private setStaticAppointments(){

    let currentDate = new Date();

    this.appointments = [
      {"id": 1, "title": "Nuovo test pubblicato in piattaforma.", 'materia': 'SMOB', "description": "Test sul Mobile.", "date": currentDate},
      {"id": 2, "title": "Nuovo test pubblicato in piattaforma.", 'materia': 'LPBD', "description": "Test su banche dati.", "date": new Date().setDate(currentDate.getDate() + 1)},
      {"id": 3, "title": "Appuntamento 03", 'materia': 'COAS', "description": "quest è la descrizione", "date": new Date().setDate(currentDate.getDate() + 1)},
      {"id": 4, "title": "Appuntamento 04", 'materia': 'DIR', "description": "quest è la descrizione", "date": new Date().setDate(currentDate.getDate() + 1)},
      {"id": 5, "title": "Appuntamento 05", 'materia': 'PGINF', "description": "quest è la descrizione", "date": new Date().setDate(currentDate.getDate() + 1)}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }

  public openAppointment(selectedAppointment){

    this.navCtrl.push(CalendarioDetailPage, {
      appointment: selectedAppointment
    });

  }

}
