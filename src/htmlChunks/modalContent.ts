import { reviewsCard } from './reviewsCard';
import { similarMoviesCard } from './similarMoviesCard';
import { Reviews } from '../interfaces/reviews';
import { Movies } from '../interfaces/movies';
import { VideoTrailer } from '../interfaces/videoTrailer';
import { stringHtmlToDom } from '../utils/stringHtmlToDom';
import { videoTrailer } from './videoTrailer';

export const modalContent = (
    videos: Array<VideoTrailer>,
    reviews: Array<Reviews>,
    similarMovies: Array<Movies>
) => {
    let htmlChunk = '';

    htmlChunk += `
        <ul class="nav nav-tabs id="tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#video-trailer">Video Trailer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#reviews">Reviews</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#similar-movies">Similar Movies</a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="video-trailer" class="container tab-pane active">
                ${videoTrailer(videos)}
            </div>
            <div id="reviews" class="container tab-pane fade">
                ${reviewsCard(reviews)}
            </div>
            <div id="similar-movies" class="container tab-pane fade">
                ${similarMoviesCard(similarMovies)}
            </div>
        </div>
    `;
    return stringHtmlToDom(htmlChunk);
};
