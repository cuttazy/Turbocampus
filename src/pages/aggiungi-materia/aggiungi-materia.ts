import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";

/**
 * Generated class for the AggiungiMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aggiungi-materia',
  templateUrl: 'aggiungi-materia.html'
})
export class AggiungiMateriaPage {

  private acronimo: string;
  private nome: string;
  private materie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private secureStorage: SecureStorage) {
    this.materie = [];
    this.acronimo = '';
    this.nome = '';
  }

  public aggiungiMateria(){

    /**
     * Controlliamo che il nome e l'acronimo siano settati
     */
    if(this.acronimo.length == 0 || this.nome.length == 0){
      alert("Acronimo e nome obbligatori.");
    } else {

      /**
       * Salviamo la nuova materia caricando prima i dati aggiornati
       */
      // this.storage.get('materie').then((materie: any) => {
      //   materie.push({'id': this.acronimo, 'nome': this.nome});
      //   this.storage.set('materie', materie);
      // });


      this.secureStorage.create('turbocampus_storage')
        .then((storage: SecureStorageObject) => {


          storage.get('materie')
            .then(
              (data: any) => {
                this.materie = JSON.parse(data);
                // alert(1);
                console.log(data);


                this.aggiungiMateriaStorage(storage);


              },
              error => {
                console.log(error);
                this.materie = [];
                this.aggiungiMateriaStorage(storage);
              }
            );




          });




    }




  }

  public aggiungiMateriaStorage(storage: SecureStorageObject){
    this.materie.push({'id': this.acronimo, 'nome': this.nome, 'media': null, 'note': []});

    // alert(this.materie.length);
    // console.log(this.materie);

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
  }





}
