/**
 * @jest-environment jsdom
 */

const { videoTrailer } = require('../videoTrailer')

const validUtubeVideoUrl = utubeVideoUrl => {
    const regExp = new RegExp(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/)
    const match = utubeVideoUrl.match(regExp)
    return match && match[2].length == 11
}

const video = [{
    'id': "5ba0f7589251417f27019c33",
    'key': 'Z1BCujX3pw8'
}]

it('contains an iframe element with a valid utube video url when video is provided', () => {
    const stringHtml = videoTrailer(video)
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