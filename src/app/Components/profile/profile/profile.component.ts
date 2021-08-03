import { Component, OnInit } from '@angular/core';
import { faCoffee, faComment, faDownload, faHome, faSignal, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faCoffee = faCoffee;
  fadownload= faDownload;
  faslide= faSlidersH;
  faHome=faHome;
  faUser=faUser;
  faComment=faComment;
  constructor() { }
  val:number=2;
  ngOnInit(): void {
  }

}
