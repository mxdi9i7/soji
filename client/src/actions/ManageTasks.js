export const getTasks = (page, totalPage, tasks, totalItems) => {
    return {
        type: 'GET_TASKS_BY_FILTER',
        page,
        tasks,
        totalPage,
        totalItems
    }
}
