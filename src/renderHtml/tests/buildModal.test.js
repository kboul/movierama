/**
 * @jest-environment jsdom
 */

const { buildModal } = require('../buildModal')
const { modal } = require('../../htmlChunks/modal')
const { videos } = require('../../utilsForTests/videos')
const { reviews } = require('../../utilsForTests/reviews')
const { movies } = require('../../utilsForTests/movies')

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

it('creates a modal by appending it under div with class name container', () => {
    const fakeMovieId = '299537'
    buildModal(modal(fakeMovieId, videos, reviews, movies))
    expect(document.getElementById(`modal_dialog_${fakeMovieId}`)).toBeTruthy()
})