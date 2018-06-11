import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the AvvisoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avviso-detail',
  templateUrl: 'avviso-detail.html',
})
export class AvvisoDetailPage {

  public avviso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.avviso = navParams.get("avviso");
  }

  avvisoDetail(id){
    this.presentAlert("Questo tasto porterà alla versione web per più dettagli. Nel caso di una pubblicazione su un forum, andrà direttamente sul forum giusto tramite un id. In questo caso, l'id è: " + id, 'OK', 'INFO');
  }

  private presentAlert(text, buttonText, ttl) {
    let alert = this.alertCtrl.create({
      title: ttl,
      subTitle: text,
      buttons: [buttonText]
    });
    alert.present();
  }

}
