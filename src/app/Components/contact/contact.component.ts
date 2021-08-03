import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  name:string ="" ;
  email:string ="" ;
  message:string ="" ;
  con:Contact=new Contact();
  constructor(){}

 save(){
   console.log(this.name,this.email,this.message);
 this.mes=true

}





  mes=false;
  submitted = false;
  onSubmit(){ 
    this.submitted = true; }



  

  ngOnInit(): void {
  }

}
