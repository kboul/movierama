import { modalContent } from './modalContent';
import { VideoTrailer } from '../interfaces/videoTrailer';
import { Reviews } from '../interfaces/reviews';
import { Movies } from '../interfaces/movies';

export const modal = (
    id: string,
    videos: Array<VideoTrailer>,
    reviews: Array<Reviews>,
    similarMovies: Array<Movies>
): HTMLElement => {
    let modal: HTMLElement = document.createElement('div');
    modal.id = `modal_dialog_${id}`;
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-window">
            <span class="close" data-dismiss="modal">&times;</span>
            ${modalContent(videos, reviews, similarMovies)}
        </div>
    `;
    return modal;
};
