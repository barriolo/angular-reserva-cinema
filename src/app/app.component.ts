import { Component } from '@angular/core';
import { UpcomingService } from './core/services/upcoming.service';
import { UpcomingMovie } from './core/models/upcoming-model';
import { BuscarCepService } from './core/services/buscar-cep.service';
import { BuscaCep } from './core/models/busca-cep-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wiz Cinema';

  constructor(
    private serveice: UpcomingService,
    private serviceCep: BuscarCepService
  ) {
    this.getMovie();
    this.getCep();
  }

  getMovie() {
    this.serveice.getUpcomingMovies().subscribe((res: UpcomingMovie[]) => {
      console.log('aqui o res do upcoming movie', res);
    });
  }

  getCep() {
    this.serviceCep.getCep('71725103').subscribe((res: BuscaCep) => {
      console.log('aqui o res do cep', res);
    });
  }

}
