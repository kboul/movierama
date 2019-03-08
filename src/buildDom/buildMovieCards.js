import { moviesCard } from '../htmlChunks/moviesCards'

export const buildMovieCards = movies =>
    document.getElementById("cardContainer").innerHTML = moviesCard(movies)