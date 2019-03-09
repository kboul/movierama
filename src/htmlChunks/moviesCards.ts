import { circularBar } from "./circularBar"
import { cardImage } from './cardImage'
import { convertDate } from "../utils/convertDate"
import { textDelimeter } from "../utils/textDelimeter"
import { Movies } from '../interfaces/movies'

export const moviesCard = (movies: Array<Movies>): string => {
    let htmlChunk: string = ''

    movies.forEach(({ vote_average, title, release_date, overview, poster_path }) => {
        const votePercentage = vote_average * 10

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
                                <div class="row">
                                    <div class="col-8">
                                        <a id="movieTitle">
                                            ${title}
                                        </a>
                                        <span id="date">
                                            ${convertDate(release_date)}
                                        </span>
                                    </div>
                                    <div class="col-4 text-right">
                                        right
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <p class="card-text mb-auto" id="overview">
                            ${textDelimeter(overview)}
                        </p>
                        <p id="viewMore">
                            <a>More Info</a>
                        </p>
                    </div >
                </div >
            </div >
    `
    })
    // console.log(htmlChunk)
    return htmlChunk
}