import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reserve-movie-upcoming',
  templateUrl: './reserve-movie-upcoming.component.html',
  styleUrls: ['./reserve-movie-upcoming.component.css']
})
export class ReserveMovieUpcomingComponent implements OnInit {
  reserveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  setFormReserve() {
    this.reserveForm = this.formBuilder.group({
      firtsName: [],
      lastName: [],
      cpf: [],
      birthdayDate: [],
      email: []
    });
  }
}
