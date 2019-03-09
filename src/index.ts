import './libs/css-circular-prog-bar'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import "./styles.css"
import { getMoviesNowPlaying } from './services/moviesNowPlayingService'
import { toggleSpinner } from './utils/toggleSpinner'
import { getSearchMovies } from './services/searchMovies'
import { buildMovieCards } from './buildDom/buildMovieCards'
import { buildSearchInput } from './buildDom/buildSearchInput'
import debounce from 'lodash.debounce'
import { Movies } from './interfaces/movies'

let moviesNowPlaying: Array<Movies> = []
let searchedMovies: Array<Movies> = []

const fetchAndDisplayMovies = (page: number) => {
    toggleSpinner('show')

    getMoviesNowPlaying(page).then(response => {
        const { data: { results } } = response
        moviesNowPlaying = isExecuted ?
            [...moviesNowPlaying, ...results] :
            [...results]
        toggleSpinner('hide')
        buildMovieCards(moviesNowPlaying)
    })
}

fetchAndDisplayMovies(1)
setTimeout(() => {
    buildSearchInput()
    onMoviesSearch()
}, 200)

window.onscroll = () => infiniteScroll()

// is used to remember if the function was executed.
let isExecuted: boolean = false
// is used to track the movies now playing 
// pages the enpoint is gonna hit 
let i: number = 1
// track the search movies pages for infinite scrolling
let y: number = 1

const infiniteScroll = () => {
    // Inside the "if" statement the "isExecuted" variable is negated to allow initial code execution.
    if (window.scrollY > (document.body.offsetHeight - window.outerHeight) && !isExecuted) {
        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true

        const searchInputValue =
            (document.getElementById('searchInput') as HTMLInputElement).value
        if (searchInputValue !== '') {
            i = 1
            y++
            searchAndDisplayMovies(y, searchInputValue)
        }
        else {
            y = 1
            i++
            fetchAndDisplayMovies(i)
        }

        // After 1 second the "isExecuted" will be set to "false" to allow the code 
        // inside the "if" statement to be executed again
        setTimeout(() => {
            isExecuted = false
        }, 1000)
    }
}

const onMoviesSearch = () => {
    document.getElementById('searchInput').onkeyup = (e: Event) => {
        const value = (e.target as HTMLInputElement).value
        searchAndDisplayMovies(1, value)
    }
}

const searchAndDisplayMovies = debounce((page: number, value: string) => {
    // if query is empty display now playing movies & return
    if (value === '') {
        fetchAndDisplayMovies(1)
        return
    }

    getSearchMovies(page, value).then(response => {
        const { data: { results } } = response
        const searchInputValue =
            (document.getElementById('searchInput') as HTMLInputElement).value
        searchedMovies = searchInputValue !== '' ?
            [...searchedMovies, ...results] :
            [...results]
        buildMovieCards(searchedMovies)
    })
}, 1000)