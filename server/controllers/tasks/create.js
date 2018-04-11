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

        let video = "";
        let file = "";
        let duration = 0;
        if(req.body.duration != "") {
            duration = req.body.duration;
        }
        if(req.files.length == 2) {
            video = req.files[0].filename;
            file = req.files[1].filename;
        } else if(req.files.length == 1) {
            if(req.files[0].fieldname == "video") {
                video = req.files[0].filename;
            } else {
                file = req.files[0].filename;
            }
        }

        let newTask = new Tasks
        ({
            jobID: req.body.jobID,
            taskID: tasksID,
            taskTitle: req.body.taskTitle,
            taskDescription: req.body.taskDescription,
            video: video,
            file: file,
            minute: duration,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        console.log(req.body);
        console.log(newTask);
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