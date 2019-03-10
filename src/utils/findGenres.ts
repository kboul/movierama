import { Genres } from '../interfaces/genres'

// returns the array of specific genres that correspond to each movie
export const findGenres = (movieGenres: Array<Genres>, genresList: Array<Number>) => {
    return movieGenres.filter(item => {
        return (genresList.indexOf(item.id) !== -1)
    })
}