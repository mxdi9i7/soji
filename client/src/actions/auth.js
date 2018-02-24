export const handleLoginUsername = (username) => {
    return {
        type: 'HANDLE_USERNAME',
        username
    }
}

export const handleLoginPassword = (password) => {
    return {
        type: 'HANDLE_PASSWORD',
        password
    }
}

