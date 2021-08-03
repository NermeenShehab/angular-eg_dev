import { Component, OnInit } from '@angular/core';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  constructor() { }
  val:number=2;
  faSignal=faSignal;
  ngOnInit(): void {
  }

}
