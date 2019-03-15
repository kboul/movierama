/**
 * @jest-environment jsdom
 */

const { videoTrailer } = require('../videoTrailer')
const { validUtubeVideoUrl } = require('../../utilsForTests/validUtubeVideoUrl')
const { videos } = require('../../utilsForTests/videos')

it('contains an iframe element with a valid utube video url when video is provided', () => {
    const stringHtml = videoTrailer(videos)
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    const videoHtmlElement = parentDiv.querySelector('iframe')

    expect(videoHtmlElement.tagName).toBe('IFRAME')
    const movieUtubeUrl = videoHtmlElement.src
    expect(validUtubeVideoUrl(movieUtubeUrl)).toBeTruthy()
})

it('shows a relevant message on the UI when video trailer is not provided', () => {
    const stringHtml = videoTrailer([])
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    expect(parentDiv.innerHTML).toEqual('No videos found.')
})