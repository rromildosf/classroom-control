import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecordsProvider } from '../../providers/records/records';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage({
    name: 'records'
})
@Component({
    selector: 'page-records',
    templateUrl: 'records.html',
})
export class RecordsPage {
    
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public recordsProvider: RecordsProvider,
        public toast: ToastController
    ) {
    }
    private records = [];
    private _records;

    ionViewDidLoad() {
        this.records = this.makeMock();
        console.log('ionViewDidLoad RecordsPage');
        console.log(this.records);
        this.getRecords();
    }
    getRecords() {
        this._records = this.recordsProvider.getRecords();
    }

    
   
    makeMock() {

        let records = [];
        for( let i = 0; i < 10; i++ ){
            records.push({
                titulo : 'Aula 2',
                data : Date.now(),
                // __alunos: 'Ramon, Francisco, Marcos',
                atividades : 'Foram realizadas bla bla',
                alunosPresentes : ['Ramon', 'Aluno 2', 'Aluno 3']            
            } )
        }
        return records;
    }
    
}
