import { Component, OnInit } from '@angular/core';
import { Catagory } from 'src/app/_models/catagory';
import { CatagoriesService } from 'src/app/service/catagories.service';
@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

  catagories:Catagory[]=[];
  constructor( public catlist:CatagoriesService ) { }

  ngOnInit(): void {
    this.catagories=this.catlist.listCatagories();
  }


}
