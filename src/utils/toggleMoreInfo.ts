
import { removeModalFromDom } from './removeModalFromDom'
import { modal } from '../htmlChunks/modal'
import { buildModal } from '../renderHtml/buildModal'
import { getReviews } from '../services/reviewsService'
import { modalContent } from '../htmlChunks/modalContent'

// makes sures DOM is not polluted with multiples modal elements
// and renders the appropriate every time based on clicked movie id
export const toggleMoreInfo = () => {
    const moreInfo = document.getElementsByClassName('more-info')
    Array.from(moreInfo).forEach((el: HTMLElement) => {
        el.addEventListener('click', () => {
            getReviews(el.id).then(response => {
                modalContent(response.data.results)
            })
            removeModalFromDom()
            buildModal(modal(el.id))
        })
    })
}