import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const ROOT_ENDPOINT = 'http://127.0.0.1:8000/api/'
// const ROOT_ENDPOINT2 = 'http://swiftaviagroup.com/api/users/login/'
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

  login(userData:{}){
  	console.log("working...")
  	const endpoint = `${ROOT_ENDPOINT}auth/`
  	return this.http.post(endpoint, userData, {})
  }
}
