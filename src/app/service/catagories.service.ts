import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Catagory } from '../_models/catagory';
import { Workers } from '../_models/workers';

@Injectable({
  providedIn: 'root'
})
export class CatagoriesService {
  catagories:Catagory[]=[
    new Catagory(1 , "PHP Developers" , "assets/imges/dev1.jpg"),
    new Catagory(2 ,"Laravel DEvelopers","assets/imges/dev2.jpg"),
    new Catagory(3 ,"programers", "assets/imges/dev3.jpg"),
    new Catagory(4 ,"Net works", "assets/imges/dev4.jpg"),
    new Catagory(5 ,"Full stack Developers", "assets/imges/dev3.jpg"),
    new Catagory(6 ,"Front End Developers", "assets/imges/dev2.jpg" ),
  
 ];
 worker:Workers[]=[
     new Workers(1,"Hader Zayed","assets/imges/p1.jpg","Mansoura" ,"ddddd",1),
     new Workers(2,"Mohamed Zayed","assets/imges/p2.jpg","Tanta" ,"ddddd",2),
     new Workers(3,"Youmna Mohamed","assets/imges/p1.jpg","Alexndria" ,"ddddd",4),
     new Workers(4,"Khaled Mustafa ","assets/imges/p2.jpg","Dumiata" ,"ddddd",3),
     new Workers(5,"Ahmed salem","assets/imges/p1.jpg","Cairo" ,"ddddd",5),
     new Workers(6,"mohamed Atef","assets/imges/p1.jpg","cairo" ,"ddddd",3),
     new Workers(7,"nadia Ebrahiem","assets/imges/p2.jpg","Mansoura" ,"ddddd",2),
     new Workers(8,"Hader Zayed","assets/imges/p1.jpg","EL zamalik" ,"ddddd",4),
     new Workers(9,"tttttttt","assets/imges/p2.jpg","EL mahla" ,"kkk ",1),

 ];
  
 listCatagories(){
  return this. catagories ;
}
detialsCatagory=new Catagory (0," "," ");

ShowCatagory(name:string){
   this.catagories.forEach(a => {
    if(a.catname==name){ 
      this.detialsCatagory=a;
      
    }
   })
}
listWorkers(){
  return this.worker ;
}
  constructor(public r:Router) { }
}
