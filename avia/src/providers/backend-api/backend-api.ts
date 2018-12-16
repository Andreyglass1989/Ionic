import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const ROOT_ENDPOINT = 'http://127.0.0.1:8000/api/'
// const ROOT_ENDPOINT2 = 'http://swiftaviagroup.com/api/users/login/'
/*
  Generated class for the BackendApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendApiProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello BackendApiProvider Provider');
  }

  getHttpOptions(includeAuth:boolean=true){
  	let myDefaultHeaders = {
  		'Content-Type': "application/json"

  	}
  	this.storage.get("authToken").then((val)=>{
  		if (val && includeAuth){
  			myDefaultHeaders['Autorization'] = `JWT ${val}`
  		}
  	})
  	
  	const httpOptions = {
  		headers: new HttpHeaders(myDefaultHeaders)
  	}
  	return httpOptions
  }

  login(userData:{}){
  	console.log("working...")
  	const endpoint = `${ROOT_ENDPOINT}auth/`
  	const options = this.getHttpOptions(false)
  	return this.http.post(endpoint, userData, options)
  }
}
