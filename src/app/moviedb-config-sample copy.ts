export class ApiMoviedb {
  apiKey: string = 'api key here';
  baseUrl: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=pt-Br&page=1`;
}

