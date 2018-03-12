export const getJobs = (page, totalPage, jobs, totalItems) => {
    return {
        type: 'GET_JOBS_BY_FILTER',
        page,
        jobs,
        totalPage,
        totalItems
    }
}
