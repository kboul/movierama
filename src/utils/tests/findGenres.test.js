const { displayGenresNames } = require('../findGenres')
const { genreMovieList } = require('../../utilsForTests/genreMovieList')
const { movieGenreIds } = require('../../utilsForTests/movieGenreIds')
it(`should return up to 3 specific movie genres based on id comparison 
    between generic list of genres & specific`, () => {
        expect(displayGenresNames(genreMovieList, movieGenreIds))
            .toEqual(' Action  Adventure  Science Fiction ')
    }
)