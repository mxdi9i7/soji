const Teams = require('../../model/Teams')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

handleTeamsFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}

    Teams.find({}, (err, teams) => {
        let paginationData = pagination(teams, itemsPerPage, page)
        const data = {
            pageCount: paginationData.pageCount,
            results: paginationData.results,
            totalCount: paginationData.totalCount,
            page: Number(page)
        }
        res.json({
            success: true,
            data: data
        })
    })
}

fetchSingleTeam = (req, res) => {
    let teamID = req.query.teamID
    Teams.findOne({teamID}, (err, team) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        } else {
            if (!team) {
                res.json({
                    success: false,
                    data: "Cannot find this team"
                })
            } else {
                res.json({
                    success: true,
                    data: team
                })
            }
        }
    })
}


module.exports = { handleTeamsFetch, fetchSingleTeam }