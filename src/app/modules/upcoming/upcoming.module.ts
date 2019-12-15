import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesUpcomingComponent } from './pages/list-movies-upcoming/list-movies-upcoming.component';
import { ReserveMovieUpcomingComponent } from './pages/reserve-movie-upcoming/reserve-movie-upcoming.component';
import { UpcomingService } from 'src/app/core/services/upcoming.service';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/components/pipes/pipes.module';
import { FormsComponentModule } from 'src/app/shared/components/forms/forms.module';
import { NgxMaskModule } from 'ngx-mask';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Token } from 'src/app/core/interceptors/token';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';



@NgModule({
  declarations: [ListMoviesUpcomingComponent, ReserveMovieUpcomingComponent],
  imports: [
    CommonModule,
    CardsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    PipesModule,
    MatCardModule,
    MatButtonModule,
    FormsComponentModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    LoadingModule
  ],
  exports: [
    ListMoviesUpcomingComponent
  ],
  providers: [
    UpcomingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Token,
      multi: true,
    }
  ]
})
export class UpcomingModule { }
