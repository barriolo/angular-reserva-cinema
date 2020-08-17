import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { PipesModule } from '../../pipes/pipes.module';
import { CommonComponentsModule } from '../../common/common.module';
import { DetailCardComponent } from '../detail-card/detail-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardComponent, DetailCardComponent ],
      imports: [
        CommonModule,
        FlexLayoutModule,
        PipesModule,
        NgCircleProgressModule.forRoot({
        }),
        MatButtonModule,
        CommonComponentsModule,
        MatDialogModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
