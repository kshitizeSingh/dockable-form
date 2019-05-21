import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  showSection= null;
  step=1
  showAccordianSection(value){
    this.showSection=value
    if(value=='defineObjective'){
      this.step=2
    }
    if(value=='KEY'){
      this.step=3
    }
    if(value=='WEIGHT'){
      this.step=4
    }
  }
}
