import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {CalendarioPage} from "../calendario/calendario";
import {NotePage} from "../note/note";
import {AltroPage} from "../altro/altro";
import {ImpostazioniPage} from "../impostazioni/impostazioni";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalendarioPage;
  tab2Root = NotePage;
  tab3Root = HomePage;
  tab4Root = AltroPage;
  tab5Root = ImpostazioniPage;

  constructor() {

  }
}
