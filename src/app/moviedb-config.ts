export class ApiMoviedb {
  apiKey: string = '64ff6f0314eadaf517aae045984f8f18';
  baseUrl: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=pt-Br&page=1`;
  buscaCep: string = 'https://viacep.com.br/ws/';
}
