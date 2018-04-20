const Announcements = require('../../model/Announcements')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

handleAnnouncementsFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}

    Announcements.find({}, (err, announcements) => {
        // let paginationData = pagination(announcements, itemsPerPage, page)
        // const data = {
        //     pageCount: paginationData.pageCount,
        //     results: paginationData.results,
        //     totalCount: paginationData.totalCount,
        //     page: Number(page)
        // }
        res.json({
            success: true,
            data: announcements
        })
    })
}

module.exports = { handleAnnouncementsFetch }