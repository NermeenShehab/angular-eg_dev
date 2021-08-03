import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  constructor() { }
  
  title:string = "hello" ;
  values: string[] = [""];
  multiple:boolean = true ;

  ngOnInit(): void {
  }

}
