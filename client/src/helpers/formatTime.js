export const formatTimeToYYMMDD = (dateObj) => {
    const formattedTime = new Date(dateObj)
    const year = formattedTime.getFullYear()
    const month = formattedTime.getMonth() + 1
    const date = formattedTime.getDate()
    return {
        year,
        month,
        date
    }
}
