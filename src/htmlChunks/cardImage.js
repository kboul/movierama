const imageBaseUrl = 'http://image.tmdb.org/t/p/w185'

export const cardImage = posterPath => {
    return `<img width="185" height="278" src="${imageBaseUrl}/${posterPath}" />`
}