import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const ROOT_ENDPOINT = 'http://127.0.0.1:8000/api/'
/*
  Generated class for the BackendApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BackendApiProvider Provider');
  }

  login(){
  	console.log("working...")
  }
}