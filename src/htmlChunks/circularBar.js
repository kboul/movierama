const chooseVoteColor = votePercentage => {
    return `
        ${votePercentage > 70 ? '#09b962' :
            votePercentage > 0 && votePercentage <= 70 ? '#d2d531' :
                'rgb(128, 128, 128)'}
    `
}

export const circularBar = votePercentage => {
    const htmlChunk = `
        <div class="progress-circle over50 p${votePercentage}">
            <span>${votePercentage != 0 ? `${votePercentage}%` : 'NR'}</span>
            <div class="left-half-clipper">
                <div 
                    class="first50-bar"
                    style="background-color: ${chooseVoteColor(votePercentage)}">
                </div>
                <div 
                    class="value-bar" 
                    style="border-color: ${chooseVoteColor(votePercentage)}">
                </div>
            </div>
        </div>
    `
    return htmlChunk
}