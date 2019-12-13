import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DetailCardComponent } from '../detail-card/detail-card.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() dataMovies;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {}

  detailMovie(movie) {
    let dialogRef: any;
    dialogRef = this.dialog.open(DetailCardComponent, {
      width: '80%',
      height: 'auto',
      disableClose: true,
      data: this.dataMovies
    },
    );
  }

  goToreserve() {
    console.log('aqui dentro do metodo');
  }
}
