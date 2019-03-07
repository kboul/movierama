import './libs/css-circular-prog-bar'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import "./styles.css"
import { getMoviesNowPlaying } from './services/moviesNowPlayingService'
import { moviesCard } from './htmlChunks/moviesCards'

let moviesNowPlaying = []

getMoviesNowPlaying(1).then(response => {
    const { data: { results } } = response
    moviesNowPlaying = [...results]
    buildMovieCards(moviesNowPlaying)
})

const buildMovieCards = movies =>
    document.getElementById("cardContainer").innerHTML = moviesCard(movies)

window.onscroll = () => infiniteScroll()

// is used to remember if the function was executed.
var isExecuted = false
// is used to track the pages the enpoint is gonna hit 
let i = 1

const infiniteScroll = () => {
    // Inside the "if" statement the "isExecuted" variable is negated to allow initial code execution.
    if (window.scrollY > (document.body.offsetHeight - window.outerHeight) && !isExecuted) {
        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true
        i++

        console.log("Fetching more movies...")
        document.getElementsByClassName('fa-spin')[0].classList.add('fa-spinner')
        getMoviesNowPlaying(i).then(response => {
            const { data: { results } } = response
            // update now playing movies with old and new
            moviesNowPlaying = [...moviesNowPlaying, ...results]
            // rebuild the whole cardContainer with the new lsit of movies
            document.getElementsByClassName('fa-spin')[0].classList.remove('fa-spinner')

            buildMovieCards(moviesNowPlaying)
        })

        // After 1 second the "isExecuted" will be set to "false" to allow the code 
        // inside the "if" statement to be executed again
        setTimeout(() => {
            isExecuted = false
        }, 1000)
    }
}