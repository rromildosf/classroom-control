import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private url: string = 'http://192.168.0.107:3000';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getRecordsUrl( id?: string ): string {
    return this.url + '/registros' + ( id ? '/'+ id : '' ) ;
   }

}
