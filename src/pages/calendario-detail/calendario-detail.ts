import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the CalendarioDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario-detail',
  templateUrl: 'calendario-detail.html',
})
export class CalendarioDetailPage {

  private appointment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.appointment = navParams.get("appointment");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioDetailPage');
  }

  appointmentDetail(id){
    this.presentAlert("Questo tasto porterà alla versione web per più dettagli. In questo caso: id: " + id, 'OK', 'INFO');
  }

  private presentAlert(text, buttonText, ttl) {
    let alert = this.alertCtrl.create({
      title: ttl,
      subTitle: text,
      buttons: [buttonText]
    });
    alert.present();
  }

  getDateFormat(date){
    return new Date(date);
  }

}
