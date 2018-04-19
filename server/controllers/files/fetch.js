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
            fileName: "$fileName",
            createdAt: "$createdAt"
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
    let query = { clientID: req.query.clientID }
    Jobs.find(query, { jobID: 1, _id: 0 }, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            Files.find({ $or: callback}, { jobID: 1, taskID: 1, fileID: 1, fileName:1, createdAt:1, _id: 0 }, (err, files) => {
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
                        //暂时保留
                        // files.forEach(function(file) {
                        //     Jobs.find( { jobID: file.jobID }, { jobTitle: 1, _id: 0 },(err,callback) => {
                        //         file["jobTitle"] = callback[0].jobTitle;
                        //     });
                        //     Tasks.find( { taskID: file.taskID }, { taskTitle: 1, _id: 0 },(err,callback) => {
                        //         file["taskTitle"] = callback[0].taskTitle;
                        //         console.log(file);
                        //         console.log(file.taskTitle);
                        //     });
                        // });
                        res.json({
                            success: true,
                            data: files
                        })
                    }
                }
            });
        } 
    });
    
}   

module.exports = { aggregateFiles, fetchFiles, handleFilesByMonth, handleSingleFile, handleFilesByClientID }