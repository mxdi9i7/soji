const Tasks = require('../../model/Tasks')

createTask = (req, res, next) => {
    let tasksID;
    let tasksArray;

    Tasks.find( { taskID:{$regex:'/*'} }, { taskID: 1, _id:0 }, (err, callback) =>
    {
        tasksArray = callback;
    }).then(function(){
        do{
            tasksID = String(parseInt(Math.random()*10000000));
            while(tasksID.length < 7)
            {
                tasksID = '0' + tasksID;
            }
        }
        while(JSON.stringify(tasksArray).indexOf(tasksID) != -1);

        let newTask = new Tasks
        ({
            jobID: req.body.jobID,
            taskID: tasksID,
            taskTitle: req.body.taskTitle,
            taskDescription: req.body.taskDescription,
            video: req.body.video,
            minute: req.body.minute,
            createdAt: new Date()
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

module.exports.createTask = createTask;