var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const secret = require('./controllers/users/secret');


// user route
const auth = require('./routes/users/auth');
const createStaff = require('./routes/users/create');
const searchStaff = require('./routes/users/search');
const deleteStaff = require('./routes/users/delete');
const updateStaff = require('./routes/users/update');
const fetchUsers = require('./routes/users/fetch');

// job route
const create = require('./routes/jobs/create');
const search = require('./routes/jobs/search');
const deletes = require('./routes/jobs/delete');
const update = require('./routes/jobs/update');
const fetch = require('./routes/jobs/fetch');
// delete 会报错

// task route
const createTask = require('./routes/tasks/create');
const searchTask = require('./routes/tasks/search');
const deleteTask = require('./routes/tasks/delete');
const updateTask = require('./routes/tasks/update');

// file route
const createFile = require('./routes/files/create');
const searchFile = require('./routes/files/search');
const deleteFile = require('./routes/files/delete');
const updateFile = require('./routes/files/update');

var app = express();


// login test
app.use('/', express.static(__dirname)); // ← adjust
app.listen(3001, function() { console.log('listening'); });


// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// mlab connect
mongoose.connect('mongodb://cheng:123456@ds163656.mlab.com:63656/cheng', function(err){
    if(err) {
        console.log('Some problem with the connection ' + err);
    } else {
        console.log('The Mongoose connection is ready');
    }
})

// CORS Middleware
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(secret.secret));
app.use(express.static(path.join(__dirname, 'public')));

//user path
app.use('/api/v1/users/auth', auth);
app.use('/api/v1/users/create', createStaff);
app.use('/api/v1/users/search', searchStaff);
app.use('/api/v1/users/delete', deleteStaff);
app.use('/api/v1/users/update', updateStaff);
app.use('/api/v1/users/fetch', fetchUsers);

// job path
app.use('/api/v1/jobs/create', create);
app.use('/api/v1/jobs/search', search);
app.use('/api/v1/jobs/delete', deletes);
app.use('/api/v1/jobs/update', update);
app.use('/api/v1/jobs/fetch', fetch);

// task path
app.use('/api/v1/tasks/create', createTask);
app.use('/api/v1/tasks/search', searchTask);
app.use('/api/v1/tasks/delete', deleteTask);
app.use('/api/v1/tasks/update', updateTask);

// file path
app.use('/api/v1/files/create', createFile);
app.use('/api/v1/files/search', searchFile);
app.use('/api/v1/files/delete', deleteFile);
app.use('/api/v1/files/update', updateFile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
