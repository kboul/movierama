import http, { API_KEY } from './httpService';

const apiEndpoint: string = `genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const getGenres = () => http.get(apiEndpoint);
