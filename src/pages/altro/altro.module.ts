import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AltroPage } from './altro';

@NgModule({
  declarations: [
    AltroPage,
  ],
  imports: [
    IonicPageModule.forChild(AltroPage),
  ],
})
export class AltroPageModule {}
