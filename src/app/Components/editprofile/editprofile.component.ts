import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  constructor() { }
  first_name:String=""
  last_name:String=""
  country:string="Egypt"
  language=["arabic","English"]
  gender=["male","female"]
  phone_number:String=""
  calendar_value:Date=new Date()
  show(d:NgForm){
    console.log(d);
  }
  ngOnInit(): void {
  }

}
