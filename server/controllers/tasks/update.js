const Tasks = require('../../model/Tasks');
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'cc2018', 
    api_key: '629372726454153', 
    api_secret: '94kiVzYXxasFHWYdTajKcvW8imY' 
});

handleTaskUpdate = (req, res, next) => {
    let taskID = req.body.taskID;
    let task = {
        taskTitle: req.body.taskTitle,
        taskDescription: req.body.taskDescription,
        file: req.body.file,
        video: req.body.video,
        minute: req.body.minute,
        updatedAt: new Date()
    };
    
    Tasks.findOneAndUpdate({taskID:taskID}, task, (err, callback) =>
    {
        if (task.file != undefined)
        {
            cloudinary.v2.uploader.destroy(callback.video, { resource_type: "video" }, function(error, result)
            {
                if (error) throw error;
                console.log(result);
            });
        }
        if (task.video != undefined)
        {
            cloudinary.v2.uploader.destroy(callback.video, { resource_type: "video" }, function(error, result)
            {
                if (error) throw error;
                console.log(result);
            });
        }
        res.json({
            success: true,
            data: "Task updated"
        }); 
    });
}

module.exports = { handleTaskUpdate }