import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseURL } from '../../constants/constants';
/*
  Generated class for the EmailServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmailServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EmailServiceProvider Provider');
  }

  sendEmail(body) {
    return this.http.post(`${baseURL}/email`, body);
  }

}
