const Tasks = require('../../model/Tasks');
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'cc2018', 
    api_key: '629372726454153', 
    api_secret: '94kiVzYXxasFHWYdTajKcvW8imY' 
});

deleteTask = (req, res, next) => {
    let taskID = req.body.taskID;
    let query = {taskID: taskID}

    Tasks.findOne(query, {video: 1, _id:0 }, (err, callback) =>
    {
        cloudinary.v2.uploader.destroy(callback[0].video, { resource_type: "video" }, function(error, result)
        {
            if(error) throw error;
            console.log(result);
        });
    }).then(function(){
        Tasks.deleteOne(query, (err, callback) =>
        {
            if(err) throw err;
            console.log('task deleted');
        });
    });

}

deleteTaskByJob = (req, res, next) => {
    let jobID = req.body.jobID;
    let query = {jobID: jobID}

    Tasks.find(query, {video: 1, _id:0 }, (err, callback) =>
    {
        callback.forEach(video => {
            cloudinary.v2.uploader.destroy(video.video, { resource_type: "video" }, function(error, result)
            {
                if(error) throw error;
                console.log(result);
            });
        });
    }).then(function(){
        Tasks.deleteMany(query, (err, callback) =>
        {
            if(err) throw err;
            console.log('task deleted');
        });
    });

}

module.exports.deleteTask = deleteTask;
module.exports.deleteTaskByJob = deleteTaskByJob;