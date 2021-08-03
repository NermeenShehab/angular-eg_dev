import { Pipe, PipeTransform } from '@angular/core'; 
import { Workers } from 'src/app/_models/workers';
@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(worker:Workers[],  searchCity:String): Workers[] {
          if (!worker || !searchCity){
            return worker ;
          }

          return worker.filter(Workers => 
            
            Workers.workercity.toLowerCase().indexOf(searchCity.toLowerCase())  !==-1  
      
    
    )
  }

}
