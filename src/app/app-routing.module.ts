import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesUpcomingComponent } from './modules/upcoming/pages/list-movies-upcoming/list-movies-upcoming.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies-upcoming', pathMatch: 'full' },
  { path: 'movies-upcoming', component: ListMoviesUpcomingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
