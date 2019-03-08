import './libs/css-circular-prog-bar'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import "./styles.css"
import { getMoviesNowPlaying } from './services/moviesNowPlayingService'
import { moviesCard } from './htmlChunks/moviesCards'
import { toggleSpinner } from './utils/toggleSpinner'
import { searchInput } from './htmlChunks/searchInput'

let moviesNowPlaying = []

const fetchAndDisplayMovies = page => {
    toggleSpinner('show')

    getMoviesNowPlaying(page).then(response => {
        const { data: { results } } = response
        moviesNowPlaying = isExecuted ?
            [...moviesNowPlaying, ...results] :
            [...results]
        console.log(moviesNowPlaying)
        toggleSpinner('hide')
        buildMovieCards(moviesNowPlaying)
    })
}

fetchAndDisplayMovies(1)
setTimeout(() => buildSearchInput(), 200)

const buildMovieCards = movies =>
    document.getElementById("cardContainer").innerHTML = moviesCard(movies)

const buildSearchInput = () => {
    document.getElementById("searchInputContainer").innerHTML = searchInput()
    onSearch()
}

window.onscroll = () => infiniteScroll()

// is used to remember if the function was executed.
let isExecuted = false
// is used to track the movies now playing 
// pages the enpoint is gonna hit 
let i = 1

const infiniteScroll = () => {
    // Inside the "if" statement the "isExecuted" variable is negated to allow initial code execution.
    if (window.scrollY > (document.body.offsetHeight - window.outerHeight) && !isExecuted) {
        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true
        i++

        fetchAndDisplayMovies(i)

        // After 1 second the "isExecuted" will be set to "false" to allow the code 
        // inside the "if" statement to be executed again
        setTimeout(() => {
            isExecuted = false
        }, 1000)
    }
}

const onSearch = () => {
    document.getElementById('searchInput').onkeyup = (e) => {
        console.log(e.target.value)
    }
}