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
        res.json({
            success: true,
            data: data
        })
    })
}

fetchJobListByClient = (req, res) => {
    console.log(req.url)
    let clientID = req.query.clientID
    Jobs.find({clientID}, (err, jobs) => {
        if (err) {
            res.json({
                success: false,
                data: "cannot find jobs associated with this account"
            })
        } else {
            res.json({
                success: true,
                data: jobs
            })
        }
    })
}

fetchJob = (req, res) => {
    const jobID = req.query.id
    Jobs.findOne({jobID}, (err, job) => {
        if (err) {
            res.json({
                success: false,
                data: "cannot find job associated with ID" + jobID
            })
        } else {
            res.json({
                success: true,
                data: job
            })
        }
    })
}
module.exports = {
    fetchJobsWithFilter, fetchJob, fetchJobListByClient
}