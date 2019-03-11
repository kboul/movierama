
import { removeModalFromDom } from './removeModalFromDom'
import { modal } from '../htmlChunks/modal'
import { buildModal } from '../renderHtml/buildModal'
import { getReviews } from '../services/reviewsService'
import { modalContent } from '../htmlChunks/modalContent'
import { getSimilarMovies } from '../services/similarMoviesService';
import { Reviews } from '../interfaces/reviews'
import { Movies } from '../interfaces/movies'

// makes sures DOM is not polluted with multiples modal elements
// and renders the appropriate every time based on clicked movie id
export const toggleMoreInfo = () => {
    const moreInfo = document.getElementsByClassName('more-info')
    Array.from(moreInfo).forEach((el: HTMLElement) => {
        el.addEventListener('click', () => {
            let reviews: Array<Reviews> = []
            let similarMovies: Array<Movies> = []
            getSimilarMovies(el.id).then(response => {
                similarMovies = [...response.data.results]
            })
            getReviews(el.id).then(response => {
                reviews = [...response.data.results]
            })
            removeModalFromDom()
            buildModal(modal(el.id))
            setTimeout(()=> {
                modalContent(reviews, similarMovies)
            }, 200)
        })
    })
}