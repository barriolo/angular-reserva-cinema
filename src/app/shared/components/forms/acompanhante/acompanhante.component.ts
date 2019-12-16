import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/format-date/format-datepicker';

@Component({
  selector: 'app-acompanhante',
  templateUrl: './acompanhante.component.html',
  styleUrls: ['./acompanhante.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class AcompanhanteComponent implements OnInit {

  // tslint:disable-next-line: no-output-rename
  @Output('form') form: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  acompanhanteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.setFormAcompanhante();
  }

  ngOnInit() {
    this.form.emit(this.acompanhanteForm);
  }

  setFormAcompanhante() {
    this.acompanhanteForm = this.formBuilder.group({
      firtsName: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
}
