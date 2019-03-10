import { Genres } from '../interfaces/genres'

// returns the array of specific genres objects that correspond to each movie
const findGenres = (movieGenres: Array<Genres>, genresList: Array<Number>): Array<Genres> => {
    return movieGenres.filter(item => {
        return (genresList.indexOf(item.id) !== -1)
    })
}

// returns the first 3 genres with spaces between them
export const displayGenresNames = (movieGenres: Array<Genres>, genresList: Array<Number>): string => {
    return findGenres(movieGenres, genresList)
        .map((genre, index) => index < 3 ? ' ' + genre.name : '')
        .join(' ')
}