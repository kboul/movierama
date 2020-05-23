import http, { API_KEY } from './httpService';

const apiEndpoint: string = `movie/now_playing?api_key=${API_KEY}&language=en-US`;

export const getMoviesNowPlaying = (page: number) =>
    http.get(`${apiEndpoint}&page=${page}`);
