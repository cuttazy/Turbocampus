import { Component } from '@angular/core';
import {NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };
  private loginApi: string;

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.registerCredentials.email = "yann.cuttaz";
    this.registerCredentials.password = "yann.cuttaz";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public notSecureLogin(){
    this.nav.setRoot(TabsPage);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          this.nav.setRoot(TabsPage);
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
