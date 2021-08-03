import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section1',
  templateUrl: './home-section1.component.html',
  styleUrls: ['./home-section1.component.css']
})
export class HomeSection1Component implements OnInit {

  constructor() { }

  btnStyle(clickedBtn:any , unclickedBtn:any){
    console.log(clickedBtn);
    console.log(unclickedBtn);
    clickedBtn.classList.add("btnClikcedStyle");
    unclickedBtn.classList.remove("btnClikcedStyle");
  }
  ngOnInit(): void {
  }

}
