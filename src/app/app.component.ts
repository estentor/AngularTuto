import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  myDisabledValue = false;
  
  constructor() {
  }

  callMyFunction() {
    this.myDisabledValue = !this.myDisabledValue
    console.log('Function called')
  }
}
