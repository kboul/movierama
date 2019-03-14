/**
 * @jest-environment jsdom
 */

const { similarMoviesCard } = require('../similarMoviesCard')

const movie = [
    {
        'genre_ids': [12, 14, 878],
        'id': 1924,
        'original_title': "Superman",
        'overview': "Mild-mannered Clark Kent works as a reporter at the Daily.",
        'popularity': 16.808,
        'poster_path': "/n2DOECThGG7h7m5AjLi2Nuh23u1.jpg",
        'release_date': "1978-12-13",
        'title': "Superman"
    }
]

it('creates a card element with correct movie title & movie overview', () => {
    const stringHtml = similarMoviesCard(movie)
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    expect(parentDiv.querySelector('.card')).not.toBeNull
    expect(parentDiv.querySelector('b').textContent).toContain(movie[0].title)
    expect(parentDiv.querySelector('.card-text').textContent).toContain(movie[0].overview)
})
it('shows a relevant message on the UI when similar movies are not provided', () => {
    const stringHtml = similarMoviesCard([])
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    expect(parentDiv.innerHTML).toContain('No similar movies found.')
})