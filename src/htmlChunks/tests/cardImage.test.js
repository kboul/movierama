const { cardImage } = require('../cardImage')
const { imageBaseUrl } = require('../cardImage')

it('contains the image base url along with an image path', () => {
    const posterPath = 'AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg'
    expect(cardImage(posterPath)).toContain(`${imageBaseUrl}/${posterPath}`)
})