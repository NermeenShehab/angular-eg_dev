import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section4',
  templateUrl: './home-section4.component.html',
  styleUrls: ['./home-section4.component.css']
})
export class HomeSection4Component implements OnInit {

  addStyle(img1 : any , cardBody1 : any){
    img1.classList.add("styleImg");
    cardBody1.classList.add("card-bodyStyle");
    // console.log(cardBody1.classList);
  }
  removeStyle(img1 :any , cardBody1 : any){
    console.log(img1.classList);
    img1.classList.remove("styleImg");
    cardBody1.classList.remove("card-bodyStyle");
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
