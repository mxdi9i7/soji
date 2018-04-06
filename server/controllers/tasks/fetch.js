const Tasks = require('../../model/Tasks')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

handleTasksFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}
    Tasks.find(query, (err, tasks) => {
        let paginationData = pagination(tasks, itemsPerPage, page)
        const tasksData = {
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
                data: tasksData
            });
        }
    });
}

getTasksByJobID = (req, res, next) => {
    let jobID = req.query.jobID
    Tasks.find({jobID}, (err, tasks) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        } else {
            res.json({
                success: true,
                data: tasks
            })
        }
    })
}

getTaskByTaskID = (req, res, next) => {
    let taskID = req.query.id
    Tasks.findOne({taskID}, (err, task) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        } else {
            res.json({
                success: true,
                data: task
            })
        }
    })
}

module.exports = { handleTasksFetch, getTasksByJobID, getTaskByTaskID }