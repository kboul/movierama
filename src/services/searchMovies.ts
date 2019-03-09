import http, { API_KEY } from './httpService'

const apiEndpoint: string =
    `search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`

export const getSearchMovies = (page: string, query: string) =>
    http.get(`${apiEndpoint}&page=${page}&query=${query}`)