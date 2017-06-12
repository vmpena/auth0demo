import {Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{

  title = 'Test of API Access';
  public results:[string];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    return this.getDocuments();
  }

  // this method calls the data service to get the JSON data
  getDocuments(){
    console.log("...getting test data from data service: ");

    return this.dataService.getDocuments()
      .then(response => this.results = response);
  }
}
