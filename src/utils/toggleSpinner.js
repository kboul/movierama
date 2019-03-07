export const toggleSpinner = status => {
    const faSpin = document.getElementsByClassName('fa-spin')[0].classList
    status === 'show' ? faSpin.add('fa-spinner') : faSpin.remove('fa-spinner')
} 