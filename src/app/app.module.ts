import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CelciusComponent } from './celcius/celcius.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';

@NgModule({
  declarations: [
    AppComponent,
    CelciusComponent,
    FahrenheitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
