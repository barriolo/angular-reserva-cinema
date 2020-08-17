import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoComponent } from './endereco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnderecoComponent', () => {
  let component: EnderecoComponent;
  let fixture: ComponentFixture<EnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoComponent ],
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
        MatSelectModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
