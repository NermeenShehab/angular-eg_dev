import { Pipe, PipeTransform } from '@angular/core';
import { Workers } from 'src/app/_models/workers';
@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(worker:Workers[],  searchName:String): Workers[] {
    if (!worker || !searchName){
      return worker ;
    }

    return worker.filter(Workers => 
      
      Workers.workername.toLowerCase().indexOf(searchName.toLowerCase())  !==-1  


)
  }

}
