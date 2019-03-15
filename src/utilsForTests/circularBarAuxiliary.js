const { circularBar } = require('../htmlChunks/circularBar')

const htmlElements = percentageNumber => {
    const stringHtml = circularBar(percentageNumber)
    const parentDiv = document.createElement('div')
    parentDiv.innerHTML = stringHtml
    const first50Bar = parentDiv.querySelector('.first50-bar')
    const valueBar = parentDiv.querySelector('.value-bar')
    const percentageSpan = parentDiv.querySelector('span')
    return {
        first50Bar,
        valueBar,
        percentageSpan
    }
}

exports.backgroundColor = percentage =>
    htmlElements(percentage).first50Bar.style.backgroundColor

exports.borderColor = percentage =>
    htmlElements(percentage).valueBar.style.borderColor

exports.percentageSpan = percentage =>
    htmlElements(percentage).percentageSpan.innerHTML