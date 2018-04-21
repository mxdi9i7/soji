const auth = (state = {
        identity: "",
        photo: "default.jpg"
    }, action) => {
    switch (action.type) {
        case 'SET_INFO':
            console.log(action.info)
            return {
                ...state,
                employeeID: action.info.staffID,
                teamID: action.info.teamID,
                username: action.info.username,
                photo: action.info.photo,
                active: action.info.active,
                totalRating: action.info.totalRating,
                ratingCount: action.info.ratingCount,
                identity: action.info.role,
                clientID: action.info.clientID,
                email: action.info.email,
                isManager: action.info.isManager
            }
        default: 
            return state
    }
}


export default auth