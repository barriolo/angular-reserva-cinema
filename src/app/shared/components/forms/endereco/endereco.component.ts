import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  // tslint:disable-next-line: no-output-rename
  @Output('form') form: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  enderecoForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.setFormEndereco();
  }

  ngOnInit() {
    this.form.emit(this.enderecoForm);
  }

  setFormEndereco() {
    this.enderecoForm = this.formBuilder.group({
      cep: [],
      address: [],
      country: [],
      state: [],
      telephone: []
    })
  }

}
