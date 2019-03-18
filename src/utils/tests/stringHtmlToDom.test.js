/**
 * @jest-environment jsdom
 */

const { stringHtmlToDom } = require('../stringHtmlToDom')
const { validHtml } = require('../../utilsForTests/validHtml')

let parentDiv

beforeEach(() => {
    const stringHtml = `
        <li class="nav-item">
            <a class="nav-link" href="#similar-movies">Similar Movies</a>
        </li>
    `
    parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtmlToDom(stringHtml)
})

it('returns a vald html element', () => {
    expect(validHtml(parentDiv.innerHTML)).toBeTruthy()
})

it('has a class nav-item', () => {
    expect(parentDiv.querySelector('.nav-item')).not.toBeNull()
})

it('has a class nav-link', () => {
    expect(parentDiv.querySelector('.nav-link')).not.toBeNull()
})

it('has a text with name "Similar Movies"', () => {
    expect(parentDiv.getElementsByClassName('nav-link')[0].innerHTML)
        .toEqual('Similar Movies')
})