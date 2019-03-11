import http, { API_KEY } from './httpService'

export const getSimilarMovies = (movieId: string) =>
    http.get(`movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)