export const toggleSpinner = (status: string) => {
    const faSpin = document.getElementsByClassName('fa-spin')[0].classList;
    status === 'show' ? faSpin.add('fa-spinner') : faSpin.remove('fa-spinner');
};
