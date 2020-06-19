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
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
    {name : "Angelica", position : "Ramos", office : "Chief Executive Officer (CEO)", startDate : "London", salary: "$1,200,000"},
  ];


}
