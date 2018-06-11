import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioDetailPage } from './calendario-detail';

@NgModule({
  declarations: [
    CalendarioDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioDetailPage),
  ],
})
export class CalendarioDetailPageModule {}
