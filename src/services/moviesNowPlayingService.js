import http, { API_KEY } from './httpService'

const apiEndpoint = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

export const getMoviesNowPlaying = () => http.get(apiEndpoint)