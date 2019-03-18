/**
 * @jest-environment jsdom
 */

const { buildModal } = require('../../renderHtml/buildModal/')
const { modal } = require('../../htmlChunks/modal')
const { videos } = require('../../utilsForTests/videos')
const { reviews } = require('../../utilsForTests/reviews')
const { movies } = require('../../utilsForTests/movies')
const { removeModalFromDom } = require('../removeModalFromDom')

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../../../index.html'), 'utf8')

jest.dontMock('fs')

beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
})

afterEach(() => {
    jest.resetModules()
})

it('makes sure modal is removed from DOM', () => {
    const fakeMovieId = '299537'
    buildModal(modal(fakeMovieId, videos, reviews, movies))
    removeModalFromDom()
    expect(document.querySelector('.modal')).toBeNull()
})