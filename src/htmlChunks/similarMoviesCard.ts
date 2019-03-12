import { Movies } from '../interfaces/movies'
import { stringHtmlToDom } from '../utils/stringHtmlToDom'

export const similarMoviesCard = (similarMovies: Array<Movies>) => {
    if (similarMovies.length === 0)
        return '<p class="mt-2">No similar movies found.</p>'

    let htmlChunk = ''
    similarMovies.forEach((movie, i) => {
        if (i > 1) return

        htmlChunk += `
            <div id="accordion">
                <div class="card mt-4">
                    <div class="card-header">
                    <b>${movie.title}</b>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            ${movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        `
    })
    return stringHtmlToDom(htmlChunk)
}