const Comments = require('../../model/Comments')
const Files = require('../../model/Files')
const Jobs = require('../../model/Jobs')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

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
    let page = req.query.page;
    let query = {teamID: req.query.teamid}
    Jobs.find(query, {jobID: 1, _id: 0}, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            Files.find({$or: callback}, {fileID: 1, _id: 0},(err, callback) => {
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
                            data: "no comment associate with the teamID found"
                        })
                    }
                } 
            })
        }
    })
    
}

module.exports = { handleCommentsFetch, handleCommentsFetchByJobID, handleCommentsFetchByTeamID }