import { Component } from '@angular/core';
import { MyDet, _detectors } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  detectors: MyDet[]; //массив датчиков

  constructor (){
    for (let i = 0; i<10; i++){
      var status=Boolean(Math.round(Math.random()));
  MyDet.id++;
  
      if(status==true){
        var color='green';
      }
      else{
        color='red'
      }
      _detectors.push({newId: MyDet.id,status,name: 'Имя',color})
    }
    
    
  }

  onAddDetectors(i)
  {
  
    _detectors.push(i);
  }
  

}

console.log(_detectors)


