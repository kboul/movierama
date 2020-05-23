import { Genres } from '../interfaces/genres';

// returns the array of specific genres movie list that correspond to each movie
const findGenres = (
    genreMovieList: Array<Genres>,
    movieGenreIds: Array<Number>
): Array<Genres> => {
    return genreMovieList.filter((item) => {
        return movieGenreIds.indexOf(item.id) !== -1;
    });
};

// returns the first 3 genres with spaces between them
export const displayGenresNames = (
    genreMovieList: Array<Genres>,
    movieGenreIds: Array<Number>
): string => {
    return findGenres(genreMovieList, movieGenreIds)
        .map((genre, index) => (index < 3 ? ' ' + genre.name : ''))
        .join(' ');
};
