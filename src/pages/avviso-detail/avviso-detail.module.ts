import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvvisoDetailPage } from './avviso-detail';

@NgModule({
  declarations: [
    AvvisoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AvvisoDetailPage),
  ],
})
export class AvvisoDetailPageModule {}
