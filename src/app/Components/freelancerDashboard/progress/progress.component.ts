import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

    constructor() { }
  
    data: any;
    ngOnInit(){      this.data = {
      labels: ['Completed Projects','Current Projects','Pending Projects'],
      datasets: [
          {
              data: [40, 10,  20],
              backgroundColor: [
                  "#90A4AE",
                  "#26A69A",
                  "#2979FF"
              ],
              hoverBackgroundColor: [
                  "#90A4AE",
                  "#26A69A",
                  "#2979FF"
              ]
          }]    
      };
  }  }