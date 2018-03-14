export const getFiles = (page, totalPage, files, totalItems) => {
    return {
        type: 'GET_FILES_BY_FILTER',
        page,
        files,
        totalPage,
        totalItems
    }
}
