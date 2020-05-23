/**
 * @jest-environment jsdom
 */

const { reviewsCard } = require('../reviewsCard');
const { reviews } = require('../../utilsForTests/reviews');

it('creates 2 cards elements with correct author & content', () => {
    const stringHtml = reviewsCard(reviews);
    const parentDiv = document.createElement('div');
    parentDiv.innerHTML = stringHtml;
    expect(parentDiv.querySelector('.card').children).toHaveLength(2);
    reviews.forEach((review, i) => {
        if (i > 1) return;
        expect(
            parentDiv.querySelectorAll('.card-header')[i].textContent
        ).toContain(`A review by ${review.author}`);
        expect(
            parentDiv.querySelectorAll('.card-text')[i].textContent
        ).toContain(review.content);
    });
});

it('shows a relevant message on the UI when similar movies are not provided', () => {
    const stringHtml = reviewsCard([]);
    const parentDiv = document.createElement('div');
    parentDiv.innerHTML = stringHtml;
    expect(parentDiv.innerHTML).toContain('No reviews found for this movie.');
});
