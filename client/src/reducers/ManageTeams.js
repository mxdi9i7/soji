const manageTeams = (state = {
    teams: [],
    page: 1,
    totalPage: 1,
    query: "",
    totalItems: 1
}, action) => {
    switch (action.type) {  
        case 'GET_TEAMS':
            return {
                ...state,
                teams: action.teams,
                page: action.page,
                totalPage: action.totalPage,
                totalItems: action.totalItems
            }
        default: 
            return state
        }
}

export default manageTeams