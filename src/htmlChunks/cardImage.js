const imageBaseUrl = 'http://image.tmdb.org/t/p/w185'

export const cardImage = posterPath => {
    return `<img width="200" height="250" src="${imageBaseUrl}/${posterPath}" />`
}