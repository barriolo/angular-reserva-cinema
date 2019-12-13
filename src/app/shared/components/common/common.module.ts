import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { MatIconModule } from '@angular/material';
import { DetailCardComponent } from '../cards/detail-card/detail-card.component';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [
    DetailCardComponent
  ]
})
export class CommonComponentsModule { }
