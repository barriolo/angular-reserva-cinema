import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acompanhante',
  templateUrl: './acompanhante.component.html',
  styleUrls: ['./acompanhante.component.css']
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
