import http, { API_KEY } from './httpService'

export const getVideoTrailer = (movieId: string) =>
    http.get(`movie/${movieId}/videos?api_key=${API_KEY}&language=en-US&page=1`)