
import { removeModalFromDom } from './removeModalFromDom'
import { modal } from '../htmlChunks/modal'
import { buildModal } from '../renderHtml/buildModal'
import { getReviews } from '../services/reviewsService'
import { getSimilarMovies } from '../services/similarMoviesService';
import { Reviews } from '../interfaces/reviews'
import { Movies } from '../interfaces/movies'
import { getVideoTrailer } from '../services/videoTrailerService'
import { VideoTrailer } from '../interfaces/videoTrailer'

// makes sures DOM is not polluted with multiples modal elements
// and renders the appropriate every time based on clicked movie id
export const toggleMoreInfo = () => {
    const moreInfo = document.getElementsByClassName('more-info')
    Array.from(moreInfo).forEach((el: HTMLElement) => {
        el.addEventListener('click', () => {
            const movieId = el.id
            let reviews: Array<Reviews> = []
            let similarMovies: Array<Movies> = []
            let videos: Array<VideoTrailer> = []
            getSimilarMovies(movieId).then(response => {
                similarMovies = [...response.data.results]
            })
            getReviews(movieId).then(response => {
                reviews = [...response.data.results]
            })
            getVideoTrailer(movieId).then(response => {
                videos = [...response.data.results]
            })
            removeModalFromDom()
            setTimeout(() => {
                buildModal(modal(movieId, videos, reviews, similarMovies))
            }, 200)
        })
    })
}