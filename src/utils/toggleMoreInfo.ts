
import { removeModalFromDom } from './removeModalFromDom'
import { modal } from '../htmlChunks/modal'
import { buildModal } from '../renderHtml/buildModal'

export const toggleMoreInfo = () => {
    const moreInfo = document.getElementsByClassName('more-info')
    const moreInfoElements = Array.from(moreInfo)
    moreInfoElements.forEach((el, i) => {
        el.addEventListener('click', () => {
            removeModalFromDom()
            buildModal(modal(moreInfo[i].id))
        })
    })
}