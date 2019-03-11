import { textDelimeter } from '../utils/textDelimeter'
import { Reviews } from '../interfaces/reviews'

export const reviewsCard = (reviews: Array<Reviews>) => {
    if (reviews.length === 0) return '<p class="mt-2">No reviews for this movie.</p>'
    let htmlChunk = ''
    reviews.forEach((review, i) => {
        if (i > 1) return

        htmlChunk += `
            <div class="card mt-4">
                <div class="card-header">
                    A review by <b>${review.author}</b>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        ${textDelimeter(review.content)}
                    </p>
                </div>
            </div>
        `
    });

    const xmlString: any = new DOMParser().parseFromString(htmlChunk, "text/html");
    return xmlString.firstChild.innerHTML
}