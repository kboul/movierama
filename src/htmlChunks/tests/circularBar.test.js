/**
 * @jest-environment jsdom
 */

const { backgroundColor, borderColor, percentageSpan, }
    = require('../../utilsForTests/circularBarAuxiliary')

it('has green color when vote percentage is bigger than 70 & displays it with %', () => {
    const percentage = 71
    const greenRGB = 'rgb(9, 185, 98)'
    expect(backgroundColor(percentage)).toBe(greenRGB)
    expect(borderColor(percentage)).toBe(greenRGB)
    expect(percentageSpan(percentage)).toEqual(`${percentage}%`)
})

it('has yellow color when percentage is smaller than 70 & displays it with %', () => {
    const percentage = 39
    const yellowRGB = 'rgb(210, 213, 49)'
    expect(backgroundColor(percentage)).toBe(yellowRGB)
    expect(borderColor(percentage)).toBe(yellowRGB)
    expect(percentageSpan(percentage)).toEqual(`${percentage}%`)
})

it('has grey color when percentage is 0 & displays NR instead of percentage number with %', () => {
    const percentage = 0
    const greyRGB = 'rgb(128, 128, 128)'
    expect(backgroundColor(percentage)).toBe(greyRGB)
    expect(borderColor(percentage)).toBe(greyRGB)
    expect(percentageSpan(percentage)).toEqual('NR')
})