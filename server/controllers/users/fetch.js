const Staff = require('../../model/Staff');
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

handleStaffFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}
    Staff.find(query, (err, staff) => {
        let paginationData = pagination(staff, itemsPerPage, page)
        const staffData = {
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
                data: staffData
            });
        }
    });
}

module.exports = { handleStaffFetch }