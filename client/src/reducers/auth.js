const handleClientLogin = (state = [], action) => {
    switch (action.type) {
        case 'HANDLE_USERNAME': 
        return [
            ...state,
            {

            }
        ]
        default: 
            return state
    }
}

export default handleClientLogin