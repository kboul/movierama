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
        'vote_average': 7.2,
        'poster_path': "/n2DOECThGG7h7m5AjLi2Nuh23u1.jpg",
        'release_date': "1978-12-13",
        'title': "Superman"
    },
    {
        'genre_ids': [18],
        'id': 1924,
        'original_title': "Creed II",
        'overview': "Between personal obligations and training for his next big fight against an opponent with ties to his family's past.",
        'vote_average': 6.6,
        'poster_path': "/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
        'release_date': "2018-12-13",
        'title': "Creed II"
    }
]

it('creates 2 cards elements with correct movie title & movie overview', () => {
    const stringHtml = similarMoviesCard(movie)
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    expect(parentDiv.querySelector('.card').children).toHaveLength(2)
    expect(parentDiv.querySelector('b').textContent).toContain(movie[0].title)
    expect(parentDiv.querySelector('.card-text').textContent).toContain(movie[0].overview)
})

it('shows a relevant message on the UI when similar movies are not provided', () => {
    const stringHtml = similarMoviesCard([])
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    expect(parentDiv.innerHTML).toContain('No similar movies found.')
})