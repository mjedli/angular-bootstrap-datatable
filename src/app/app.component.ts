import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';
import { MyComponent } from './my.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
constructor(public appService : AppService) { }

  title = "test";
  name = 'Angular ' + VERSION.major;

  myComponent:MyComponent[];

  ngOnInit() {
    this.myComponent = this.appService.getAllComponent();
  }

}
