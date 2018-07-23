import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import { RecordsService } from './records.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //add modules for the application
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecordsService],//used to add services  and make it visible to all app
  bootstrap: [AppComponent]
})
export class AppModule { }
