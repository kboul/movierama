/**
 * @jest-environment jsdom
 */

const { cardImage } = require('../cardImage');
const { validURL } = require('../../utilsForTests/validURL');

let imageHtmlElement;

beforeAll(() => {
    const posterPath = 'AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg';
    const stringHtml = cardImage(posterPath);
    const parentDiv = document.createElement('div');
    parentDiv.innerHTML = stringHtml;
    imageHtmlElement = parentDiv.querySelector('img');
});

it('returns an img html element', () => {
    expect(imageHtmlElement.tagName).toBe('IMG');
});

it('has specific width & height attribute values', () => {
    expect(imageHtmlElement.width).toEqual(185);
    expect(imageHtmlElement.height).toEqual(278);
});

it('has a valid url attribute', () => {
    expect(validURL(imageHtmlElement.src)).toBeTruthy();
});
