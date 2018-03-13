const Jobs = require('../../model/Jobs')
const Tasks = require('../../model/Tasks')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

fetchJobsWithFilter = (req, res) => {
    let page = req.query.page
    let query = {}

    Jobs.find({}, (err, jobs) => {
        let paginationData = pagination(jobs, itemsPerPage, page)
       
        const data = {
            pageCount: paginationData.pageCount,
            results: paginationData.results,
            totalCount: paginationData.totalCount,
            page: Number(page)
        }
        console.log(data)
        res.json(data)
    })
}

module.exports = {
    fetchJobsWithFilter
}