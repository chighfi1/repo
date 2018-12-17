import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RetrieveDataService } from '../services/fetchWeather.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RetrieveDataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
