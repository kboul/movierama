import { moviesCards } from '../htmlChunks/moviesCards'
import { Movies } from '../interfaces/movies'

export const buildMoviesCards = (movies: Array<Movies>) =>
    document.getElementById("cardContainer").innerHTML = moviesCards(movies)