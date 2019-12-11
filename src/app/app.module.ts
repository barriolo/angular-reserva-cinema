import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingService } from './core/services/upcoming.service';
import { HttpClientModule } from '@angular/common/http';
import { BuscarCepService } from './core/services/buscar-cep.service';
import { EnderecoComponent } from './shared/components/forms/endereco/endereco.component';
import { AcompanhanteComponent } from './shared/components/forms/acompanhante/acompanhante.component';
import { MovieCardComponent } from './shared/components/cards/movie-card/movie-card.component';
import { UpcomingModule } from './modules/upcoming/upcoming.module';

@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent,
    AcompanhanteComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UpcomingModule
  ],
  providers: [
    UpcomingService,
    BuscarCepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
