import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { ReserveMovieUpcomingComponent } from './reserve-movie-upcoming.component';
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
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/format-date/format-datepicker';
import { Platform } from '@angular/cdk/platform';

describe('ReserveMovieUpcomingComponent', () => {
  let component: ReserveMovieUpcomingComponent;
  let fixture: ComponentFixture<ReserveMovieUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveMovieUpcomingComponent ],
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
        RouterTestingModule
      ],
      providers:[
        {provide: DateAdapter, useClass: AppDateAdapter, deps: [MAT_DATE_LOCALE, Platform]},
        {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveMovieUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
