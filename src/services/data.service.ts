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
