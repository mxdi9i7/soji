const Jobs = require('../../model/Jobs')
const Tasks = require('../../model/Tasks')
const { itemsPerPage } = require('../../constant')

fetchJobsWithFilter = (req, res) => {
    let page = req.query.page
    let query = {}

    Jobs.find(
        query, null,
        {
            skip: (page == 1 ? 0 : page) * itemsPerPage,
            limit: itemsPerPage
        }, (err, jobs) => {
            Jobs.find({}, (err, count) => {
                let totalCount = count.length;
                let totalPage = Math.ceil(totalCount / itemsPerPage)
                const data = {
                    page,
                    totalPage,
                    jobs,
                    totalCount
                }
                res.json(data)
            })
        })
}

module.exports = {
    fetchJobsWithFilter
}