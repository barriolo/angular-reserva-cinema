import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingService } from './core/services/upcoming.service';
import { HttpClientModule } from '@angular/common/http';
import { BuscarCepService } from './core/services/buscar-cep.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UpcomingService,
    BuscarCepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
