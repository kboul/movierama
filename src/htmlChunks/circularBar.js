const chooseVoteColor = votePercentage => `${votePercentage > 70 ? '#09b962' : '#d2d531'}`

export const circularBar = votePercentage => {
    const htmlChunk = `
        <div class="progress-circle over50 p${votePercentage}">
            <span>${votePercentage}%</span>
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