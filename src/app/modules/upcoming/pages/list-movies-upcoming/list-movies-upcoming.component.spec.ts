import { ListMoviesUpcomingComponent } from './list-movies-upcoming.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxMaskModule } from 'ngx-mask';
import { FormsComponentModule } from 'src/app/shared/components/forms/forms.module';
import { PipesModule } from 'src/app/shared/components/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { UpcomingService } from 'src/app/core/services/upcoming.service';
import { of } from 'rxjs';
import { UpcomingMovie } from 'src/app/core/models/upcoming-model';

describe('ListMoviesUpcomingComponent', () => {
  let component: ListMoviesUpcomingComponent;
  let fixture: ComponentFixture<ListMoviesUpcomingComponent>;
  let service: UpcomingService;
  let spy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviesUpcomingComponent ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatCardModule,
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
        HttpClientTestingModule,
        BrowserModule,
        LoadingModule,
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule,
        CardsModule
      ],
      providers: [
        UpcomingService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(UpcomingService);


    fixture = TestBed.createComponent(ListMoviesUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return list film typeof UpcomingMov', () => {
    spy = spyOn(service, 'getUpcomingMovies').and.returnValue(of({
      adult: false,
      backdrop_path: '/8PK4X8U3C79ilzIjNTkTgjmc4js.jpg',
      genre_ids: [18, 14, 10751],
      id: 521034,
      original_language: 'en',
      original_title: 'The Secret Garden',
      overview: '',
      popularity: 108.944,
      poster_path: '/lHIgpy7yAyqxQx79PtvqEoiXuk8.jpg',
      release_date: '2020-07-08',
      title: 'The Secret Garden',
      video: false,
      vote_average: 7.4,
      vote_count: 80,
  }));
    component.getListUpcomingMovies();
    expect(spy).toBeTruthy(UpcomingMovie);
  });

  it('should be called getListGenres',() => {
    spy = spyOn(service, 'getUpcomingMovies').and.returnValue(of({
      adult: false,
      backdrop_path: '/8PK4X8U3C79ilzIjNTkTgjmc4js.jpg',
      genre_ids: [18, 14, 10751],
      id: 521034,
      original_language: 'en',
      original_title: 'The Secret Garden',
      overview: '',
      popularity: 108.944,
      poster_path: '/lHIgpy7yAyqxQx79PtvqEoiXuk8.jpg',
      release_date: '2020-07-08',
      title: 'The Secret Garden',
      video: false,
      vote_average: 7.4,
      vote_count: 80,
    }));
    const spy1 = spyOn(service, 'getGenres').and.returnValue(of({
      id: 28,
      name: 'Action'
    }));
    component.getListUpcomingMovies();
    expect(spy1).toHaveBeenCalled();
  })
});
