import {NgModule, ErrorHandler, Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {HttpClientModule} from "@angular/common/http";
import { HttpProvider } from '../providers/http/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {LoginPage} from "../pages/login/login";
import { TurboCampusConfigProvider } from '../providers/turbo-campus-config/turbo-campus-config';
import {NotePage} from "../pages/note/note";
import {ImpostazioniPage} from "../pages/impostazioni/impostazioni";
import {CalendarioPage} from "../pages/calendario/calendario";
import {AltroPage} from "../pages/altro/altro";
import { NotificationServiceProvider } from '../providers/notification-service/notification-service';
import {CalendarModule} from "ion2-calendar";
import {AggiungiMateriaPage} from "../pages/aggiungi-materia/aggiungi-materia";
import {MateriaDetailPage} from "../pages/materia-detail/materia-detail";
import {SecureStorage} from "@ionic-native/secure-storage";
import {CalendarioDetailPage} from "../pages/calendario-detail/calendario-detail";
import {AvvisoDetailPage} from "../pages/avviso-detail/avviso-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    NotePage,
    ImpostazioniPage,
    CalendarioPage,
    AltroPage,
    AggiungiMateriaPage,
    MateriaDetailPage,
    CalendarioDetailPage,
    AvvisoDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    NotePage,
    ImpostazioniPage,
    CalendarioPage,
    AltroPage,
    AggiungiMateriaPage,
    MateriaDetailPage,
    CalendarioDetailPage,
    AvvisoDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    AuthServiceProvider,
    TurboCampusConfigProvider,
    NotificationServiceProvider,
    SecureStorage
  ]
})
export class AppModule {}

