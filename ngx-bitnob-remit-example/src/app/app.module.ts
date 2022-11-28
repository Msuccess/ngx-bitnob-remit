import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxBitnobModule } from 'ngx-bitnob';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxBitnobModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
