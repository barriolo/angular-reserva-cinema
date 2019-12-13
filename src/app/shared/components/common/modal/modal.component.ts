import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() titulo: string;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
  }


}
