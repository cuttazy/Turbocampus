import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImpostazioniPage } from './impostazioni';

@NgModule({
  declarations: [
    ImpostazioniPage,
  ],
  imports: [
    IonicPageModule.forChild(ImpostazioniPage),
  ],
})
export class ImpostazioniPageModule {}
