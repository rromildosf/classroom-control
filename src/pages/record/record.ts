import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RecordsProvider } from '../../providers/records/records';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage({
    name: 'record'
})
@Component({
    selector: 'page-record',
    templateUrl: 'record.html',
})
export class RecordPage {
    
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public recordsProvider: RecordsProvider,
        public loading: LoadingController
    ) {
    }
    private record: any = {};
    editing: boolean;

    ionViewDidLoad() {
        this.record = this.navParams.data;
        if( this.record && this.record.alunosPresentes ) {
            this.editing = true;
            this.record.__alunos =  this.record.alunosPresentes.join(', ');
        }

    }
    
    sendRecord( record: any ){
        if( !record.titulo ) return;

        this.loading.create( { content: "Registrando aula...", duration: 2000 } ).present();
        record.alunosPresentes = record.__alunos.split(',').map( item => item.trim() );

        this.recordsProvider.sendRecord( record )
            .then( res => this.handleRes( res ) );
        
    }

    editRecord( record : any ) {
        if( !record.titulo ) return;
        
        console.log(record);
        
        this.loading.create( { content: "Registrando aula...", duration: 2000 } ).present();
        record.alunosPresentes = record.__alunos.split(',').map( item => item.trim() );
        
        this.recordsProvider.editRecord( record, record._id )
        .then( res => this.handleRes( res ) );
    }
    
    handleRes( res ) {
        this.record = {};
        setTimeout(() => {
            this.navCtrl.push('records');
        }, 2000 );
    }

    clear() {
        this.record = {
            titulo : '',
            __alunos: '',
            atividades: ''
        };
    }
}
