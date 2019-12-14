import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidator } from '../../../../shared/validators/validators-email';
@Component({
  selector: 'app-reserve-movie-upcoming',
  templateUrl: './reserve-movie-upcoming.component.html',
  styleUrls: ['./reserve-movie-upcoming.component.css']
})
export class ReserveMovieUpcomingComponent implements OnInit {
  reserveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
   }

  ngOnInit() {
    this.setFormReserve();
  }

  setFormReserve() {
    this.reserveForm = this.formBuilder.group({
      firtsName: [],
      lastName: [],
      cpf: [],
      birthdayDate: [],
      email: ['', Validators.compose([Validators.required, GlobalValidator.emailValidator])]
    });
  }

  saveReserve() {
    console.log(this.reserveForm);
  }
}
