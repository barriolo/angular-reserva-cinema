import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcompanhanteComponent } from './acompanhante/acompanhante.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'



@NgModule({
  declarations: [
    AcompanhanteComponent,
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    AcompanhanteComponent,
    EnderecoComponent
  ]
})
export class FormsComponentModule { }
