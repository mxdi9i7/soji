const Tasks = require('../../model/Tasks');


handleTaskCreate = (req, res, next) => {
    let tasksID;
    let tasksArray;

    Tasks.distinct("taskID", (err, callback) =>
    {
        tasksArray = callback;
    }).then(function(){
        do {
            tasksID = String(parseInt(Math.random()*10000000));
            while (tasksID.length < 7)
            {
                tasksID = '0' + tasksID;
            }
        }
        while (JSON.stringify(tasksArray).indexOf(tasksID) != -1);

        let newTask = new Tasks
        ({
            jobID: req.body.jobID,
            taskID: tasksID,
            taskTitle: req.body.title,
            taskDescription: req.body.description,
            video: req.body.video,
            file: req.body.file,
            minute: req.body.duration,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        newTask.save((err, callback) => {
            if(err) {
                res.json({
                    success: false,
                    message: err
                });
            } 
            else {
                res.json({
                    success: true,
                    message: "Task created"
                });
            } 
        });
    });
}

module.exports = { handleTaskCreate }