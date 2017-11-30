import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../api/api';

@Injectable()
export class RecordsProvider {
    
    constructor(public http: HttpClient, public api: ApiProvider) {}

    sendRecord( record: any ): Promise<any> {
        return this.http
            .post( this.api.getRecordsUrl(), record )
            .toPromise();

    }
    editRecord( record: any, id: string ) : Promise<any> {
        return this.http
            .put( this.api.getRecordsUrl( id ), { novoRegistro: record } )
            .toPromise();
    }
    getRecords() : Promise<any> {
        return this.http
            .get( this.api.getRecordsUrl() )
            .toPromise();
    }

    
}
