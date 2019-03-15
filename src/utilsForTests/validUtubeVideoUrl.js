exports.validUtubeVideoUrl = utubeVideoUrl => {
    const regExp = new RegExp(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/)
    const match = utubeVideoUrl.match(regExp)
    return match && match[2].length == 11
}