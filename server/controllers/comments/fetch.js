const Comments = require('../../model/Comments')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

handleCommentsFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}

    Comments.find({}, (err, comments) => {
        let paginationData = pagination(comments, itemsPerPage, page)
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

module.exports = { handleCommentsFetch }