const Files = require('../../model/Files')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

handleFilesFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}
    Files.find(query, (err, files) => {
        let paginationData = pagination(files, itemsPerPage, page)
        const filesData = {
            pageCount: paginationData.pageCount,
            results: paginationData.results,
            totalCount: paginationData.totalCount,
            page: Number(page)
        }
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: filesData
            });
        }
    });
}


module.exports = { handleFilesFetch }