import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightinfo',
  templateUrl: './rightinfo.component.html',
  styleUrls: ['./rightinfo.component.css']
})
export class RightinfoComponent implements OnInit {

  constructor() { }
  values=["php","html"]
  ngOnInit(): void {
  }
}
