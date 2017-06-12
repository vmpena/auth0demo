import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {

  // PRODUCTION
  // private dataURL = 'https://api.occwatch.com/api/';

  // DEVELOPMENT
  private dataURL = 'http://localhost:5000/api/';
  private fullPath: string;

  constructor(private http: Http) { }

  // (1) I think that this is where the call to Auth0 should take place.
  // There should be a method here that contacts Auth0 to get the bearer token.
  getToken(){

  }

  // (2) Then there should be a method that receives the response from Auth0,
  // and extracts the bearer token received from the method above
  extractToken(){

  }

  // (3) There should be a method that contacts Auth0 using the bearer token
  // from the steps above and sends it to the API server
  sendTokenToServer(){

  }

  // test method
  getDocuments(){
    this.fullPath = this.dataURL + "test";

    console.log("Inside data.service.getDocuments()");
    console.log("... full path of request: ", this.fullPath);

    return this.http.get(this.fullPath)
      .toPromise()
      .then(result => result.json())
      // .catch(this.handleError);
      .catch((res: Response) => this.handleError(res));
  }

  handleError(error: any){

    console.log('An error occurred in data.service:');
    console.log(error);
    return Promise.reject(error.message || error);

  }



}
