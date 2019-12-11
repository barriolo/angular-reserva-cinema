import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveMovieUpcomingComponent } from './reserve-movie-upcoming.component';

describe('ReserveMovieUpcomingComponent', () => {
  let component: ReserveMovieUpcomingComponent;
  let fixture: ComponentFixture<ReserveMovieUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveMovieUpcomingComponent ]
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
