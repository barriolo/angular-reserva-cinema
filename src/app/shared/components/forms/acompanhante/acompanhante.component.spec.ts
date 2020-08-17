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

  it('should return the invalid form', () => {
    component.setFormAcompanhante();
    component.acompanhanteForm.get('firtsName').setValue(null);
    component.acompanhanteForm.get('lastName').setValue(null);
    component.acompanhanteForm.get('cpf').setValue('123');
    component.acompanhanteForm.get('birthdayDate').setValue(null);
    component.acompanhanteForm.get('email').setValue('aefafea');
    const invalid = component.acompanhanteForm.invalid;
    expect(invalid).toBeTruthy();
  });

  it('should return the valid form', () => {
    component.setFormAcompanhante();
    component.acompanhanteForm.get('firtsName').setValue('Joe');
    component.acompanhanteForm.get('lastName').setValue('Doe');
    component.acompanhanteForm.get('cpf').setValue('12345678901');
    component.acompanhanteForm.get('birthdayDate').setValue('27/11/1989');
    component.acompanhanteForm.get('email').setValue('joedoe@test.com');
    const invalid = component.acompanhanteForm.invalid;
    expect(invalid).toBeFalsy();
  });

  it('should return invalid form because email is wrong', () => {
    component.setFormAcompanhante();
    component.acompanhanteForm.get('firtsName').setValue('Joe');
    component.acompanhanteForm.get('lastName').setValue('Doe');
    component.acompanhanteForm.get('cpf').setValue('12345678901');
    component.acompanhanteForm.get('birthdayDate').setValue('27/11/1989');
    component.acompanhanteForm.get('email').setValue('joedoe');
    const invalid = component.acompanhanteForm.invalid;
    expect(invalid).toBeTruthy();
  });

  it('should return invalid form because cpf is wrong', () => {
    component.setFormAcompanhante();
    component.acompanhanteForm.get('firtsName').setValue('Joe');
    component.acompanhanteForm.get('lastName').setValue('Doe');
    component.acompanhanteForm.get('cpf').setValue('123456789');
    component.acompanhanteForm.get('birthdayDate').setValue('27/11/1989');
    component.acompanhanteForm.get('email').setValue('joedoe@teste.com');
    const invalid = component.acompanhanteForm.invalid;
    expect(invalid).toBeTruthy();
  });
});
