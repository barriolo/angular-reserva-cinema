import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcompanhanteComponent } from './acompanhante/acompanhante.component';
import { EnderecoComponent } from './endereco/endereco.component';



@NgModule({
  declarations: [AcompanhanteComponent, EnderecoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AcompanhanteComponent,
    EnderecoComponent
  ]
})
export class FormsModule { }
