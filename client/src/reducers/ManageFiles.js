const manageFiles = (state = {
    files: [],
    page: 1,
    totalPage: 1,
    query: "",
    totalItems: 1
}, action) => {
    switch (action.type) {  
        case 'GET_FILES_BY_FILTER':
            return {
                ...state,
                files: action.files,
                page: action.page,
                totalPage: action.totalPage,
                totalItems: action.totalItems
            }
        default: 
            return state
        }
}

export default manageFiles