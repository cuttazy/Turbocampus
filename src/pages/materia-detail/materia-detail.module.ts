import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriaDetailPage } from './materia-detail';

@NgModule({
  declarations: [
    MateriaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MateriaDetailPage),
  ],
})
export class MateriaDetailPageModule {}
