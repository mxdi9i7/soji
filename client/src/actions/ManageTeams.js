export const getTeams = (page, totalPage, teams, totalItems) => {
    return {
        type: 'GET_TEAMS',
        page,
        teams,
        totalPage,
        totalItems
    }
}
