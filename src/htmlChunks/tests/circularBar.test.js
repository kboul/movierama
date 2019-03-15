/**
 * @jest-environment jsdom
 */

const { backgroundColor, borderColor, percentageSpan, }
    = require('../../utilsForTests/circularBarAuxiliary')

it('has green color when vote percentage is bigger than 70 & displays it with %', () => {
    const percentage = 71
    expect(backgroundColor(percentage)).toBe('rgb(9, 185, 98)')
    expect(borderColor(percentage)).toBe('rgb(9, 185, 98)')
    expect(percentageSpan(percentage)).toEqual(`${percentage}%`)
})

it('has yellow color when percentage is smaller than 70 & displays it with %', () => {
    const percentage = 39
    expect(backgroundColor(percentage)).toBe('rgb(210, 213, 49)')
    expect(borderColor(percentage)).toBe('rgb(210, 213, 49)')
    expect(percentageSpan(percentage)).toEqual(`${percentage}%`)
})

it('has grey color when percentage is 0 & displays NR instead of percentage number with %', () => {
    const percentage = 0
    expect(backgroundColor(percentage)).toBe('rgb(128, 128, 128)')
    expect(borderColor(percentage)).toBe('rgb(128, 128, 128)')
    expect(percentageSpan(percentage)).toEqual('NR')
})