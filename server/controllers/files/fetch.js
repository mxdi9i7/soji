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

module.exports = { handleFilesFetch, handleFilesByMonth, handleSingleFile }