import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingService } from './core/services/upcoming.service';
import { HttpClientModule } from '@angular/common/http';
import { BuscarCepService } from './core/services/buscar-cep.service';
import { UpcomingModule } from './modules/upcoming/upcoming.module';
import { CardsModule } from './shared/components/cards/cards.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UpcomingModule,
    CardsModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [
    UpcomingService,
    BuscarCepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
