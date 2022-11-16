import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

//import { data } from './datasource';

@Component({
  selector: 'app-angular-functionalities',
  templateUrl: './angular-functionalities.component.html',
  styleUrls: ['./angular-functionalities.component.css']
})
export class AngularFunctionalitiesComponent implements OnInit {
  constructor(private location: Location) { }

  public data: object[];

  ngOnInit(): void {
      this.data =  [
                    { "id": 0, "name": "Available" },
                    { "id": 1, "name": "Ready" },
                    { "id": 2, "name": "Started" }
                  ];
  }



  previousView(){
    this.location.back();
  }

}
