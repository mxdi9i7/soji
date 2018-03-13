const manageEmployees = (state = {
    employees: [],
    page: 1,
    totalPage: 1,
    query: "",
    active: "true",
    totalItems: 1
}, action) => {
    switch (action.type) {  
        case 'GET_EMPLOYEES_BY_FILTER':
            return {
                ...state,
                employees: action.employees,
                page: action.page,
                totalPage: action.totalPage,
                totalItems: action.totalItems
            }
        default: 
            return state
        }
}

export default manageEmployees