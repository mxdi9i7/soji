export const formatTimeToYYMMDD = (dateObj) => {
    const formattedTime = new Date(dateObj)
    const year = formattedTime.getFullYear()
    const month = formattedTime.getMonth() + 1
    const date = formattedTime.getDate()
    const hour = formattedTime.getHours()
    const minute = formattedTime.getMinutes()
    return {
        year,
        month,
        date,
        hour,
        minute
    }
}
