import './libs/css-circular-prog-bar'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import "./styles.css"
import { getMoviesNowPlaying } from './services/moviesNowPlayingService'
import { toggleSpinner } from './utils/toggleSpinner'
import { getSearchMovies } from './services/searchMovies'
import { buildMoviesCards } from './renderHtml/buildMoviesCards'
import { buildSearchInput } from './renderHtml/buildSearchInput'
import debounce from 'lodash.debounce'
import { Movies } from './interfaces/movies'
import { changeHeaderTitle } from './renderHtml/changeHeaderTitle'

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
        buildMoviesCards(moviesNowPlaying)
        changeHeaderTitle('nowPlaying')
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
let moviesNowPlayingCurrentPage: number = 1
// track the search movies pages for infinite scrolling
let searchedMoviesCurrentPage: number = 1

const infiniteScroll = () => {
    // Inside the "if" statement the "isExecuted" variable is negated to allow initial code execution.
    if (window.scrollY > (document.body.offsetHeight - window.outerHeight) && !isExecuted) {
        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true

        const searchInputValue =
            (document.getElementById('searchInput') as HTMLInputElement).value
        if (searchInputValue !== '') {
            moviesNowPlayingCurrentPage = 1
            searchedMoviesCurrentPage++
            searchAndDisplayMovies(searchedMoviesCurrentPage, searchInputValue)
        }
        else {
            searchedMoviesCurrentPage = 1
            moviesNowPlayingCurrentPage++
            fetchAndDisplayMovies(moviesNowPlayingCurrentPage)
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
        // if searchedMovies is > 0 => a query has been made
        // therefore another query takes place => empty the array
        if (searchedMovies.length > 0) {
            searchedMovies = []
            searchedMoviesCurrentPage = 1
        }
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

    toggleSpinner('show')

    getSearchMovies(page, value).then(response => {
        const { data: { results } } = response
        searchedMovies = value !== '' ?
            [...searchedMovies, ...results] :
            [...results]
        buildMoviesCards(searchedMovies)
        changeHeaderTitle('searchMovies')
    })
    toggleSpinner('hide')
}, 1000)