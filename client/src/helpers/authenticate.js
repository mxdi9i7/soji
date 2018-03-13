export const saveTokenToBrowser = (token) => {
    if (token) {
        window.sessionStorage.setItem('token', token)
    } else {
        return
    }
}

export const getTokenFromBrowser = () => {
    const token = window.sessionStorage.getItem('token')
    return token
}