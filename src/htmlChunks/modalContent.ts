import { reviewsCard } from "./reviewsCard"
import { similarMoviesCard } from './similarMoviesCard'
import { Reviews } from '../interfaces/reviews'
import { Movies } from '../interfaces/movies'
import { VideoTrailer } from '../interfaces/videoTrailer'

export const modalContent = (videos: Array<VideoTrailer>, reviews: Array<Reviews>, similarMovies: Array<Movies>) => {
    let modalContent: HTMLElement = document.createElement('div')
    modalContent.innerHTML = `
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="video-trailer-tab" 
                    data-toggle="tab" role="tab" aria-controls="video-trailer">
                    Video Trailer
                </a>
                <a class="nav-item nav-link" id="reviews-tab" 
                    data-toggle="tab" role="tab" aria-controls="reviews">
                    Reviews
                </a>
                <a class="nav-item nav-link" id="similar-movies-tab" 
                    data-toggle="tab" role="tab" aria-controls="similar-movies">
                    Similar Movies
                </a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="video-trailer" 
                role="tabpanel" aria-labelledby="video-trailer-tab">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe 
                        class="embed-responsive-item" 
                        src="https://www.youtube.com/embed/${videos[0].key}" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="tab-pane fade" id="reviews" 
                role="tabpanel" aria-labelledby="reviews-tab">
                ${reviewsCard(reviews)}
            </div>
            <div class="tab-pane fade " id="similar-movies" 
                role="tabpanel" aria-labelledby="similar-movies-tab">
                ${similarMoviesCard(similarMovies)}
            </div>
        </div>
    `

    document.getElementsByClassName('modal-window')[0].append(modalContent)
}