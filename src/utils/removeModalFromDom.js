export const removeModalFromDom = () => {
    const elements = document.getElementsByClassName("modal")
    while (elements.length > 0) elements[0].remove()
}