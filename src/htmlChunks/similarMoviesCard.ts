import { Movies } from '../interfaces/movies'

export const similarMoviesCard = (similarMovies: Array<Movies>) => {
    console.log(similarMovies)
    if (similarMovies.length === 0)
        return '<p class="mt-2">No similar movies found for this movie.</p>'

    let htmlChunk = ''
    similarMovies.forEach((movie, i) => {
        if (i > 3) return

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
    });

    const xmlString: any = new DOMParser().parseFromString(htmlChunk, "text/html");
    return xmlString.firstChild.innerHTML
}