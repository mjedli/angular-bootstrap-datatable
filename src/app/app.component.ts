import { Component, VERSION } from '@angular/core';
import { MyComponent } from 'my.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Angular ' + VERSION.major;

  myComponent  : MyComponent[] = [
    {name : 1, position : "title 3", office : "address 1", startDate : true, salary: "salary"},
  ];


}
