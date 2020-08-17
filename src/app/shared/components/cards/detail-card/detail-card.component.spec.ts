import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardComponent } from './detail-card.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatButtonModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PipesModule } from '../../pipes/pipes.module';
import { CommonComponentsModule } from '../../common/common.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailCardComponent', () => {
  let component: DetailCardComponent;
  let fixture: ComponentFixture<DetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCardComponent ],
      imports: [
        CommonModule,
        FlexLayoutModule,
        PipesModule,
        NgCircleProgressModule.forRoot({
        }),
        MatButtonModule,
        CommonComponentsModule,
        MatDialogModule,RouterTestingModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
