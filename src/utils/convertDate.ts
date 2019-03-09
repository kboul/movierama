const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export const convertDate = (releaseDate: string): string => {
    const temp_date = releaseDate.split('-')
    return `${months[Number(temp_date[1]) - 1]} ${temp_date[2]}, ${temp_date[0]}`
}