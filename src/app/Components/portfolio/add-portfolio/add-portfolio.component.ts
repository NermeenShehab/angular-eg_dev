import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit {

  constructor() { }
  title:string = "hello" ;
  skills: string[] = [""];
  multiple:boolean = true ;
  ngOnInit(): void {
  }


}
