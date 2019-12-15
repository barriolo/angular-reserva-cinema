import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpcomingMovie } from 'src/app/core/models/upcoming-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpcomingMovie,
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }

  goToreserve() {
    this.closeModal();
    this.router.navigate([`/reserve-movie/${this.data.id}/${this.data.title}`]);
  }
}
