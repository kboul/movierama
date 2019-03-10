export const textDelimeter = (text: string): string => {
    const wordSplit = text.split(" ")
    let words = []

    // if the text.length is not bigger than 39 
    // return the original text
    if (wordSplit.length < 35) return text

    // find the first 35 words, store them
    // and then present them i nthe UI with 3 dots
    wordSplit.forEach((el, i) => {
        if (i < 35) words.push(el)
    })
    return `${words.join(' ')}...`
}