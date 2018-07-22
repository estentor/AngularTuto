import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  records = [
    {
      name : 'Luis',
      online : 'true'
    },
    {
      name : 'Lucho',
      online : 'false'
    },
    {
      name : 'Liclok',
      online : 'true'
    },
    {
      name : 'Juancho',
      online : 'true'
    },
    {
      name : 'Pepe',
      online : 'false'
    },
    {
      name : 'Checo',
      online : 'true'
    }
  ]
  constructor() {
  }


}
