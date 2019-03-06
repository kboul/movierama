let details = ''

export const moviesCard = movies => {
    movies.forEach(({ vote_average, title, release_date, overview }) => {
        details += `
            <div class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>    
                    <div class="col d-flex flex-column" id="infoBox">
                        <div class="row">
                            <div class="col-2">
                                ${vote_average}
                            </div>
                            <div class="col-10">
                                <a id="movieTitle">
                                    ${title}
                                </a>
                                <span id="date">
                                    ${release_date}
                                </span>
                            </div>
                        </div>
                        <p class="card-text mb-auto" id="overview">
                            ${overview.substring(0, 212)}
                        </p>
                        <p id="viewMore">
                            <a>More Info</a>
                        </p>
                    </div>
                </div>
            </div>
        `
    })
    // console.log(details)
    return details
}