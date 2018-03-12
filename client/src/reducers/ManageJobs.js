const manageJobs = (state = {
    jobs: [],
    page: 1,
    totalPage: 1,
    query: "",
    type: "all",
    dateFilter: "all",
    totalItems: 1
}, action) => {
    switch (action.type) {  
        case 'GET_JOBS_BY_FILTER':
            return {
                ...state,
                jobs: action.jobs,
                page: action.page,
                totalPage: action.totalPage,
                totalItems: action.totalItems
            }
        default: 
            return state
        }
}

export default manageJobs