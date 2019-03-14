/**
 * @jest-environment jsdom
 */

const { cardImage } = require('../cardImage')

const posterPath = 'AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg'

const validURL = str => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str)
}

let imageHtmlElement

beforeAll(() => {
    const stringHtml = cardImage(posterPath)
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    imageHtmlElement = parentDiv.querySelector('img')
})

it('returns an img html element', () => {
    expect(imageHtmlElement.tagName).toBe('IMG')
})

it('has specific width & height attribute values', () => {
    expect(imageHtmlElement.width).toEqual(185)
    expect(imageHtmlElement.height).toEqual(278)
})

it('has a valid url attribute', () => {
    expect(validURL(imageHtmlElement.src)).toBeTruthy()
})