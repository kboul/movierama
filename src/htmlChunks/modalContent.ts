import { reviewsCard } from "./reviewsCard"
import { similarMoviesCard } from './similarMoviesCard'
import { Reviews } from '../interfaces/reviews'
import { Movies } from '../interfaces/movies'

export const modalContent = (reviews: Array<Reviews>, similarMovies: Array<Movies>) => {
    let modalContent: HTMLElement = document.createElement('div')
    modalContent.innerHTML = `
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home" >Home</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" role="tab" aria-controls="nav-profile" >Reviews</a>
                <a class="nav-item nav-link active" id="similar-movies-tab" data-toggle="tab" role="tab" aria-controls="similar-movies">Similar Movies</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                ${reviewsCard(reviews)}
            </div>
            <div class="tab-pane fade show active" id="similar-movies" role="tabpanel" aria-labelledby="similar-movies-tab">
                ${similarMoviesCard(similarMovies)}
            </div>
        </div>
    `

    document.getElementsByClassName('modal-window')[0].append(modalContent)
}