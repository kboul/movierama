/**
 * @jest-environment jsdom
 */

const { buildSearchInput } = require('../buildSearchInput')

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

it('creates a search input along with an icon as a child element of the div with id searchInputContainer', () => {
    buildSearchInput()
    expect(document.querySelector('.fa-search')).toBeTruthy()
    expect(document.querySelector('#searchInput')).toBeTruthy()
})