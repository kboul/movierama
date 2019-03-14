const { displayGenresNames } = require('../findGenres')

const genreMovieList = [
    { 'id': 28, 'name': 'Action' },
    { 'id': 12, 'name': "Adventure" },
    { 'id': 878, 'name': "Science Fiction" },
    { 'id': 36, 'name': "History" }
]

const movieGenreIds = [28, 12, 878, 36]

it('should return up to 3 specific movie genres based on id comparison between generic list of genres & specific', () => {
    expect(displayGenresNames(genreMovieList, movieGenreIds)).toEqual(' Action  Adventure  Science Fiction ')
})