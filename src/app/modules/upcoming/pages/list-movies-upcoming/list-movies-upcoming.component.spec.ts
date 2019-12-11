import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesUpcomingComponent } from './list-movies-upcoming.component';

describe('ListMoviesUpcomingComponent', () => {
  let component: ListMoviesUpcomingComponent;
  let fixture: ComponentFixture<ListMoviesUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviesUpcomingComponent ]
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
