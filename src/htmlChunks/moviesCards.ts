import { circularBar } from "./circularBar"
import { cardImage } from './cardImage'
import { convertDate } from "../utils/convertDate"
import { textDelimeter } from "../utils/textDelimeter"
import { Movies } from '../interfaces/movies'
import { getGenres } from '../services/genresService'
import { Genres } from '../interfaces/genres'
import { displayGenresNames } from '../utils/findGenres'

let movieGenres: Array<Genres> = []

getGenres().then(response => {
    const { data: { genres } } = response
    movieGenres = [...genres]
})

export const moviesCard = (movies: Array<Movies>): string => {
    if (movies.length === 0)
        return 'No movies found. Please insert another keyword.'

    let htmlChunk: string = ''

    movies.forEach(({
        vote_average,
        title,
        release_date,
        overview,
        poster_path,
        genre_ids,
        id
    }) => {
        const votePercentage: number = vote_average * 10

        htmlChunk += `
            <div class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-auto d-none d-lg-block">
                        ${cardImage(poster_path)}
                    </div>    
                    <div class="col d-flex flex-column" id="infoBox">
                        <div class="row">
                            <div class="col-2">
                                ${circularBar(votePercentage)}
                            </div>
                            <div class="col-10">
                                <a id="movieTitle">
                                    ${title}
                                </a>
                                <span id="date">
                                    ${release_date ? convertDate(release_date) : ''}
                                </span>
                            </div>
                        </div>
                       <span id="genres">
                            ${displayGenresNames(movieGenres, genre_ids)}
                       </span>
                        <p 
                            class="card-text mb-auto" 
                            id="overview">
                            ${textDelimeter(overview)}
                        </p>
                        <p id="viewMore">
                            <a 
                                class="more-info" 
                                id="${id}">
                                More Info
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        `
    })
    return htmlChunk
}