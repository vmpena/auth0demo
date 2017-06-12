import {Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
  title = 'Test of API Access';

  constructor(private dataService: DataService) { }

  // the data returned from the API
  public results:[string];

  ngOnInit(){

    return this.getDocuments();

  }

  getDocuments(){
    console.log("...getting test data from data service: ");

    return this.dataService.getDocuments()
      .then(response => this.results = response);
  }
}
