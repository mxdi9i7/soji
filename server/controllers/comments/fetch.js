const Comments = require('../../model/Comments')
const Files = require('../../model/Files')
const Jobs = require('../../model/Jobs')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')
const Tasks = require('../../model/Tasks')

handleCommentsFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}

    Comments.aggregate([
        {
            $sort:{createdAt:-1}
        }
    ], (err, comments) => {
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

handleCommentsFetchByJobID = (req, res, next) => {
    let page = req.query.page;
    let query = {jobID: req.query.jobid}
    Files.find(query, {fileID: 1, _id: 0},(err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            if(callback[0] != null) {
                Comments.aggregate([
                    { $match:{ $or: callback } },
                    { $sort:{createdAt:-1} }
                ], (err, comments) => {
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
            } else {
                res.json({
                    success: true,
                    data: "no comment associate with the jobID found"
                })
            }
        } 
    })
}

handleCommentsFetchByTeamID = (req, res, next) => {
    let query = {teamID: req.query.teamID}
    Jobs.find(query, (err, jobs) => {
        if (!jobs) {
            res.json({
                success: false,
                data: "Did not find any comments"
            })
        } else {
            const jobIDArr = jobs.map(job => {
                return job.jobID
            })
            Files.find({jobID: {$in: jobIDArr}}, (err, files) => {
                if (!files) {
                    res.json({
                        success: false,
                        data: "Did not find any comments"
                    })
                } else {
                    const filesIDArr = files.map(file => (file.fileID))
                    Comments.find({fileID: {$in: filesIDArr}}, (err, comments) => {
                        if (!comments) {
                            res.json({
                                success: false,
                                data: "Did not find any comments"
                            })
                        } else {
                            res.json({
                                success: false,
                                data: comments
                            })
                        }
                    })
                }
            })
        }
    })
    
}

module.exports = { handleCommentsFetch, handleCommentsFetchByJobID, handleCommentsFetchByTeamID }