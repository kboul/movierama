export const textDelimeter = text => {
    const wordSplit = text.split(" ")
    let words = []

    // if the text.length is not bigger than 39 
    // return the original text
    if (wordSplit.length < 39) return text

    // find the first 39 words, store them
    // and then present them i nthe UI with 3 dots
    wordSplit.forEach((el, i) => {
        if (i < 39) words.push(el)
    })
    return `${words.join(' ')} ...`
}