
const { textDelimeter } = require('../textDelimeter')

const smallText = "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life."
const bigText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

it('returns the actual text when words have length < 34', () => {
    expect(textDelimeter(smallText).length).toEqual(smallText.length)
})

it('shrinks the text to length smaller than its actual when words have length > 34', () => {
    expect(textDelimeter(bigText)).not.toHaveLength(bigText.length)
})