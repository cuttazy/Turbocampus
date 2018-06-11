import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider, User} from "../../providers/auth-service/auth-service";
import {LoginPage} from "../login/login";

/**
 * Generated class for the ImpostazioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-impostazioni',
  templateUrl: 'impostazioni.html',
})
export class ImpostazioniPage {


  currentUser: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    // this.currentUser = auth.getUserInfo();
    // console.log(this.currentUser);
    this.currentUser = new User("Yann Cuttaz", "yann.cuttaz@icec.ti-edu.ch");// Test only
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImpostazioniPage');
  }

  public logout(){
    this.navCtrl.setRoot(LoginPage);
    this.auth.logout();
  }

}
