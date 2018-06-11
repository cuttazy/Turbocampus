import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";

/**
 * Generated class for the MateriaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materia-detail',
  templateUrl: 'materia-detail.html',
})
export class MateriaDetailPage {

  private materia: any;
  private materie: any;
  private nota: number;
  private commento: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private secureStorage: SecureStorage) {
    this.materie = [];
    this.materia = navParams.get("materia");
    this.commento = "";
    this.nota = 4;
  }

  /**
   * Ritorna il colore della card a dipendenza della nota
   * @param nota
   * @returns {any}
   */
  public getColor(nota){
    var color = "orange"
    if(nota < 4)
      color = "red";
    else if(nota >= 5)
      color = "green";
    let styles = {
      'background-color': color,
      'margin-top': '3px',
      'margin-bottom': '3px'
    };
    return styles;
  }

  public aggiungiNota(){

    /**
     * Controlliamo che il nome e l'acronimo siano settati
     */
    if(this.nota > 6 || this.nota < 1){
      alert("La nota deve essere compresa tra 1 e 6");
    } else {

      /**
       * Salviamo la nuova nota caricando prima i dati aggiornati
       */
      this.secureStorage.create('turbocampus_storage')
        .then((storage: SecureStorageObject) => {


          storage.get('materie')
            .then(
              (data: any) => {
                this.materie = JSON.parse(data);
                // alert(1);
                console.log(data);


                /**
                 * Aggiungiamo la nota alla nostra materia
                 */

                console.log("Numero materie: " + this.materie.length);

                for(let m = 0 ; m < this.materie.length ; m++){

                  console.log("Materia 1: " + this.materie[m].id);
                  console.log("Materia corrente: " + this.materia.id);

                  if(this.materie[m].id == this.materia.id){
                    this.materie[m].note.push({"commento": this.commento, "nota": this.nota});
                    break;
                  }

                }

                console.log("Materie modificate: " + JSON.stringify(this.materie));

                // alert(this.materie.length);
                // console.log(this.materie);

                /**
                 * Risalviamo le materie aggiornate
                 */
                storage.set('materie', JSON.stringify(this.materie))
                  .then(
                    () => {
                      /**
                       * Salvataggio OK!
                       * Ritorna alla view precedente, dicendole di ricaricare le materie
                       */
                      this.navCtrl.getPrevious().data.reload = true;
                      this.navCtrl.pop({});
                    },
                    error => {
                      console.error('Error storing item', error);
                      alert("Errore salvando la materia. Prego riprovare.");
                    }
                  );




              },
              error => {
                alert("Errore salvando la materia. Prego riprovare.");
              }
            );




        });




    }

  }

}
