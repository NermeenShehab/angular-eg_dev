import { Component, OnInit } from '@angular/core';
import { faBell, faComment, faSlidersH, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leftinfo',
  templateUrl: './leftinfo.component.html',
  styleUrls: ['./leftinfo.component.css']
})
export class LeftinfoComponent implements OnInit {
  faTasks=faTasks;
  faComment=faComment;
  faBell=faBell;
  faSlide=faSlidersH;
  constructor() { }

  ngOnInit(): void {
  }

}
