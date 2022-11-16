import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mscdashboard',
  templateUrl: './mscdashboard.component.html',
  styleUrls: ['./mscdashboard.component.css']
})
export class MSCDashboardComponent implements OnInit {

  searchBillToolTitle: string = "Search Bill Tool";
  exportContainerToolTitle: string = "Export Container Tool";
  acidControlTitle: string = "ACID control";
  hardCopyManifestToolTitle: string = "Hard Copy Manifest Tool";
  shopTracking: string = 'Shop tracking'

  constructor() { }

  ngOnInit(): void {
  }

}
