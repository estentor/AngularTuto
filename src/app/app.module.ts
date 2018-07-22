import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //add modules for the application
    BrowserModule,
    FormsModule
  ],
  providers: [],//used to add services 
  bootstrap: [AppComponent]
})
export class AppModule { }
