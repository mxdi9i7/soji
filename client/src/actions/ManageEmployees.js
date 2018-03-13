export const getEmployees = (page, totalPage, employees, totalItems) => {
    return {
        type: 'GET_EMPLOYEES_BY_FILTER',
        page,
        employees,
        totalPage,
        totalItems
    }
}
