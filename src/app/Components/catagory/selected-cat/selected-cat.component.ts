import { Component, OnInit } from '@angular/core';
import { CatagoriesService } from 'src/app/service/catagories.service';
import { ActivatedRoute } from '@angular/router';
import { Workers } from 'src/app/_models/workers';
 
@Component({
  selector: 'app-selected-cat',
  templateUrl: './selected-cat.component.html',
  styleUrls: ['./selected-cat.component.css']
})
export class SelectedCatComponent implements OnInit {
   
   worker:Workers[]=[];
   searchCity:String="";
   searchName:String="";
   searchRate:number=0 ;
  constructor(public selectcat:CatagoriesService ,public ar:ActivatedRoute ) { }  
   

  ngOnInit(): void {
    this.selectcat.ShowCatagory(this.ar.snapshot.params["name"]); //select catagory with name
    this.worker=this.selectcat.listWorkers();
     
  }
  
  readonly:boolean=true;
  cancel:boolean=false;
}
