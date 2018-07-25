import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {
    
   }

  getData() {
    return this.http.get<any>('http://localhost:1234/file.php');
  }
}
