const Files = require('../../model/Files')
const Jobs = require('../../model/Jobs')
const Tasks = require('../../model/Tasks')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

fetchFiles = (req, res) => {
    const { page } = req.query;
    Files.find({}, (err, files) => {
        let paginationData = pagination(files, itemsPerPage, page)
        const filesData = {
            pageCount: paginationData.pageCount,
            results: paginationData.results,
            totalCount: paginationData.totalCount,
            page: Number(page)
        }
        res.json({
            success: true,
            data: filesData
        })
    })
}

aggregateFiles = (req, res) => {
    let page = req.query.page;
    let month = req.query.month;
    let taskID = req.query.taskID;
    let query = {}
    Files.aggregate([
        {$project: {
            month: {$month: "$createdAt"},
            year: {$year: "$createdAt"},
            taskID: "$taskID",
            jobID: "$jobID",
            managerID: "$managerID",
            fileID: "$fileID",
            fileName: "$fileName",
            createdAt: "$createdAt"
        }}, {
            $match: { taskID: taskID,month: Number(month)}
        }
    ], (err, files) => {
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

handleSingleFile = (req, res) => {
    const { fileID } = req.query
    Files.findOne({fileID}, (err, file) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            if (!file) {
                res.json({
                    success: true,
                    data: "Cannot find any file with this ID"
                });
            } else {
                res.json({
                    success: true,
                    data: file
                });
            }
        }
    })
}

handleFilesByMonth = (req, res, next) => {
    const { month, year, taskID } = req.query;
    Files.aggregate([
        {$project: {
            month: {$month: "$createdAt"},
            year: {$year: "$createdAt"},
            taskID: "$taskID",
            jobID: "$jobID",
            managerID: "$managerID",
            fileID: "$fileID",
            createdAt: "$createdAt",
            file: "$file",
            fileTitle: "$fileTitle"
        }}, {
            $match: {taskID, month: Number(month), year: Number(year)}
        }
    ], (err, files) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        } else {
            if (!files.length) {
                res.json({
                    success: true,
                    data: "No files found for this time period."
                })
            } else {
                res.json({
                    success: true,
                    data: files
                })
            }
        }
    })
}

handleFilesByClientID = (req, res, next) => {
    const { clientID } = req.query
    Files.find({clientID}, (err, files) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        } else {
            if (!files.length) {
                res.json({
                    success: true,
                    data: "No files found for this time period."
                })
            } else {
                res.json({
                    success: true,
                    data: files
                })
            }
        }
    })
}   

module.exports = { aggregateFiles, fetchFiles, handleFilesByMonth, handleSingleFile, handleFilesByClientID }