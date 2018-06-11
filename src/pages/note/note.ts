import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MateriaDetailPage} from "../materia-detail/materia-detail";
import {AggiungiMateriaPage} from "../aggiungi-materia/aggiungi-materia";
import {SecureStorageObject, SecureStorage} from "@ionic-native/secure-storage";

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  private materie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private secureStorage: SecureStorage) {
    this.materie = [];
    this.aggiornaDati();
  }

  ionViewWillEnter(){
    /**
     * Verifichiamo se bisogna ricaricare i dati (viene lanciato dopo l'aggiungi materia,
     * perché la view esiste già e bisogna ricaricare i dati nella tabella)
     */
    if(this.navParams.get("reload")){
      this.navParams.data.reload = 0;
      this.aggiornaDati();
    }
  }

  public apriMateria(materia){
    this.navCtrl.push(MateriaDetailPage, {
      materia: materia
    });
  }

  public aggiungiMateria(){
    this.navCtrl.push(AggiungiMateriaPage, {});
  }

  public aggiornaDati(){

    this.secureStorage.create('turbocampus_storage')
      .then((storage: SecureStorageObject) => {


        storage.get('materie')
          .then(
            (data: any) => {
              console.log(data);
              this.materie = JSON.parse(data);

              /**
               * Ricalcoliamo le medie
               */
              for(var materiaI = 0 ; materiaI < this.materie.length ; materiaI++){

                var media = 0;

                // console.log("note length: " + this.materie[materiaI].note.length);

                for(var notaI = 0; notaI < this.materie[materiaI].note.length ; notaI++){
                  media += parseFloat(this.materie[materiaI].note[notaI].nota);
                }

                // console.log("media var: " + JSON.stringify(media));
                if(media > 0)
                  this.materie[materiaI].media = media / notaI; // l'indice è già a +1
                else
                  this.materie[materiaI].media = 0;

                // console.log("media: " + this.materie[materiaI].media);

              }

            },
            error => {
              console.log(error);
              this.materie = [];
            }
          );

      });

  }

  /**
   * Ritorna il colore della card a dipendenza della nota
   * @param nota
   * @returns {any}
   */
  public getColor(nota){
    var color = "orange";
    if(nota < 4)
      color = "red";
    else if(nota >= 5)
      color = "green";
    else if(nota == 0)
      color = "white";
    let styles = {
      'background-color': color,
      'margin-top': '3px',
      'margin-bottom': '3px'
    };
    return styles;
  }

}

