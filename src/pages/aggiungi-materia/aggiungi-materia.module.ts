import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AggiungiMateriaPage } from './aggiungi-materia';

@NgModule({
  declarations: [
    AggiungiMateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(AggiungiMateriaPage),
  ],
})
export class AggiungiMateriaPageModule {}
