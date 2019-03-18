/**
 * @jest-environment jsdom
 */

const { changeHeaderTitle } = require('../changeHeaderTitle')

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../../../index.html'), 'utf8')

jest.dontMock('fs')

beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
})

afterEach(() => {
    // restore the original func after test
    jest.resetModules()
})

it('changes header title to appropriate string when "" argument is passed', () => {
    changeHeaderTitle('nowPlaying')
    expect(document.getElementById('headerTitle').innerHTML).toEqual('Now Playing Movies')
})

it('changes header title to appropriate string when "" argument is passed', () => {
    changeHeaderTitle('')
    expect(document.getElementById('headerTitle').innerHTML).toEqual('Search » Movie Results')
})