const chooseVoteColor = (votePercentage: number): string => {
    return `
        ${votePercentage > 70 ? 'rgb(9, 185, 98)' :
            votePercentage > 0 && votePercentage <= 70 ? 'rgb(210, 213, 49)' :
                'rgb(128, 128, 128)'}
    `
}

export const circularBar = (votePercentage: number): string => {
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