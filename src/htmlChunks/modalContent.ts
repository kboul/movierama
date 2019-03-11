import { card } from "./card"
import { Reviews } from '../interfaces/reviews'

export const modalContent = (reviews: Array<Reviews>) => {
    let modalContent: HTMLElement = document.createElement('div')
    modalContent.innerHTML = `
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home" >Home</a>
                <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" role="tab" aria-controls="nav-profile" >Reviews</a>
                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" role="tab" aria-controls="nav-contact">Contact</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
            <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                ${card(reviews)}
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        </div>
    `

    document.getElementsByClassName('modal-window')[0].append(modalContent)
}