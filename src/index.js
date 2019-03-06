import './libs/css-circular-prog-bar'
import 'bootstrap/dist/css/bootstrap.css'
import "./styles.css"
import { getMoviesNowPlaying } from './services/moviesNowPlayingService'
import { moviesCard } from './htmlChunks/moviesCards'

let moviesNowPlaying = []

getMoviesNowPlaying().then(response => {
    const { data: { results } } = response
    moviesNowPlaying = [...results]
    buildMovieCards(moviesNowPlaying)
})

const buildMovieCards = movies =>
    document.getElementById("cardContainer").innerHTML = moviesCard(movies)