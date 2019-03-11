export const changeHeaderTitle = (status: string) => {
    const headerTitle: HTMLElement = document.getElementById("headerTitle")
    status === 'nowPlaying' ?
        headerTitle.innerHTML = 'Now Playing Movies' :
        headerTitle.innerHTML = 'Search &raquo; Movie Results'
}