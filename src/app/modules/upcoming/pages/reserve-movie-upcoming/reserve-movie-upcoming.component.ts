import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidator } from '../../../../shared/validators/validators-email';
import { ActivatedRoute } from '@angular/router';
import { UpcomingService } from 'src/app/core/services/upcoming.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-reserve-movie-upcoming',
  templateUrl: './reserve-movie-upcoming.component.html',
  styleUrls: ['./reserve-movie-upcoming.component.css']
})
export class ReserveMovieUpcomingComponent implements OnInit {
  reserveForm: FormGroup;
  isCompanion: boolean = false;
  idMovie: number;
  nameMovie: string;
  imagePoster: string;
  valorMovie: number;
  frete: number;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private serviceReserve: UpcomingService
  ) {
   }

  ngOnInit() {
    this.setFormReserve();
    this.router.params.subscribe(params => {
      this.idMovie = params['id'];
      this.nameMovie = params['title'];
    });
    this.getImages();
    this.valorMovie = Math.floor(Math.random() * (100 - 20) + 20);
    this.frete = 10;
  }

  setFormReserve() {
    this.reserveForm = this.formBuilder.group({
      firtsName: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, GlobalValidator.emailValidator])]
    });
  }

  saveReserve() {
    this.serviceReserve.saveReserve(this.reserveForm.value)
      .subscribe((res: any) => {
      });
  }

  haveCompanion() {
    this.isCompanion = !this.isCompanion;
    if (this.isCompanion === false) {
      this.reserveForm.removeControl('acompanhante');
    }
  }

  getImages() {
    this.loading = true;
    this.serviceReserve.getImagesByMovie(this.idMovie)
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.loading = false;
          }, 300);
        })
      ).subscribe((res: any) => {
      this.imagePoster = res.posters[0].file_path;
    });
  }

}
