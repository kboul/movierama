
import { removeModalFromDom } from './removeModalFromDom'
import { modal } from '../htmlChunks/modal'
import { buildModal } from '../renderHtml/buildModal'

// makes sures DOM is not polluted with multiples modal elements
// and renders the appropriate every time based on clicked movie id
export const toggleMoreInfo = () => {
    const moreInfo = document.getElementsByClassName('more-info')
    const moreInfoElements = Array.from(moreInfo)
    moreInfoElements.forEach((el: HTMLElement, i: number) => {
        el.addEventListener('click', () => {
            removeModalFromDom()
            buildModal(modal(moreInfo[i].id))
        })
    })
}