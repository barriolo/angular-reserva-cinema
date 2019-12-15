import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarCepService } from 'src/app/core/services/buscar-cep.service';
import { Endereco } from 'src/app/core/models/endereco-model';
import { MatSnackBar } from '@angular/material';

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
    private cepService: BuscarCepService,
    private snackBar: MatSnackBar
  ) {
    this.setFormEndereco();
  }

  ngOnInit() {
    this.form.emit(this.enderecoForm);
  }

  setFormEndereco() {
    this.enderecoForm = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      country: ['', Validators.required],
      uf: ['', Validators.required],
      telephone: ['', Validators.required],
      complemento: ['', Validators.required]
    });
  }

  getEndereco(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep != null && cep !== '') {
      this.cepService.getCep(cep)
      .subscribe((res: any) => {
        this.enderecoForm.patchValue(res);
        if (res.error === true) {
          const men = 'CEP inválido';
          this.openSnackBar(men, '');
          console.log('aqui');
        }
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
