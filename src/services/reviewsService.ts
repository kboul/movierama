import http, { API_KEY } from './httpService'

export const getReviews = (movieId: string) =>
    http.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)