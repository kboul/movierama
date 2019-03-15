/**
 * @jest-environment jsdom
 */

const { similarMoviesCard } = require('../similarMoviesCard')
const { movies } = require('../../utilsForTests/movies')

it('creates 2 cards elements with correct movie title & movie overview', () => {
    const stringHtml = similarMoviesCard(movies)
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    expect(parentDiv.querySelector('.card').children).toHaveLength(2)
    expect(parentDiv.querySelector('b').textContent).toContain(movies[0].title)
    expect(parentDiv.querySelector('.card-text').textContent).toContain(movies[0].overview)
})

it('shows a relevant message on the UI when similar movies are not provided', () => {
    const stringHtml = similarMoviesCard([])
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    expect(parentDiv.innerHTML).toContain('No similar movies found.')
})