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

describe('ListMoviesUpcomingComponent', () => {
  let component: ListMoviesUpcomingComponent;
  let fixture: ComponentFixture<ListMoviesUpcomingComponent>;

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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
