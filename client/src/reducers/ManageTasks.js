const manageTasks = (state = {
    tasks: [],
    page: 1,
    totalPage: 1,
    query: "",
    totalItems: 1
}, action) => {
    switch (action.type) {  
        case 'GET_TASKS_BY_FILTER':
            return {
                ...state,
                tasks: action.tasks,
                page: action.page,
                totalPage: action.totalPage,
                totalItems: action.totalItems
            }
        default: 
            return state
        }
}

export default manageTasks