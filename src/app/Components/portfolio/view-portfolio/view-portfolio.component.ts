import { Component, OnInit } from '@angular/core';
import { FreelancerPortfolio } from 'src/app/_models/freelancer-portfolio';

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {

  constructor() { }
  freelancerName:string='John Do';
  portfolioList:FreelancerPortfolio[]=[];

  ngOnInit(): void {
    this.portfolioList=[
      new FreelancerPortfolio(
        1,
        "Project1 Title",
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dicta libero alias doloremque aperiam quidem, odit totam, a expedita maxime quibusdam. Dicta quisquam consectetur facilis, dolor adipisci praesentium ut eaque",
        "assets/portfolio1.jpg",
        ['html' , 'css' , 'php'],
        '#'),
    ];
  }
}
