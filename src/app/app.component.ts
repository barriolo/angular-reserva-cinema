import { Component } from '@angular/core';
import { UpcomingService } from './core/services/upcoming.service';
import { UpcomingMovie } from './core/models/upcoming-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wiz Cinema';

  constructor(
    private serveice: UpcomingService
  ) {
    this.getMovie();
  }

  getMovie() {
    this.serveice.getUpcomingMovies().subscribe((res: UpcomingMovie[]) => {
      console.log('aqui o res', res);
    })
  }

}
