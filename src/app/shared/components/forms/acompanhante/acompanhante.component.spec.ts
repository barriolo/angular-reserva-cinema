import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhanteComponent } from './acompanhante.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AcompanhanteComponent', () => {
  let component: AcompanhanteComponent;
  let fixture: ComponentFixture<AcompanhanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhanteComponent ],
      imports:[
        BrowserAnimationsModule,
        CommonModule,
        FlexLayoutModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        NgxMaskModule.forRoot(),
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
