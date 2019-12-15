import { Component } from '@angular/core';
import { UpcomingService } from './core/services/upcoming.service';
import { UpcomingMovie } from './core/models/upcoming-model';
import { BuscarCepService } from './core/services/buscar-cep.service';
import { BuscaCep } from './core/models/busca-cep-model';
import { Genres } from './core/models/genres-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wiz Cinema';

  navegation = [
    {title: 'Up Coming Movies', route: '/movies-upcoming'},
  ];

  constructor(
    private router: Router
  ) {

  }

  gotToNavigation(router) {
    this.router.navigate([router]);
  }

}
