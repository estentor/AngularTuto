import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData() {
    return [
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
  }
}
