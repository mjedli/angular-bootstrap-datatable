import { Component, VERSION } from '@angular/core';
import { MyComponent } from './my.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Angular ' + VERSION.major;

  myComponent  : MyComponent[] = [
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
    {name : "Bradley", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "Paris", salary: "$1,200,000"},
    {name : "Brielle", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "Tokyo", salary: "$1,200,000"},
    {name : "Bruno", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "San Francisco", salary: "$1,200,000"},
    {name : "Caesar", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "New York", salary: "$1,200,000"},
  ];


}
