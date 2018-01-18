var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

var index = require('./routes/index');

// user route
const auth = require('./routes/users/auth');
const createStaff = require('./routes/users/create');

// job route
const create = require('./routes/jobs/create');
const search = require('./routes/jobs/search');
const deletes = require('./routes/jobs/delete');
const update = require('./routes/jobs/update');
// delete 会报错

// task route
const createTask = require('./routes/tasks/create');
const searchTask = require('./routes/tasks/search');
const deleteTask = require('./routes/tasks/delete');
const updateTask = require('./routes/tasks/update');

var app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// mlab connect
mongoose.connect('mongodb://cheng:123456@ds163656.mlab.com:63656/cheng', {useMongoClient: true}, function(err){
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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

//user path
app.use('/users/auth', auth);
app.use('/users/create', createStaff);

// job path
app.use('/jobs/create', create);
app.use('/jobs/search', search);
app.use('/jobs/delete', deletes);
app.use('/jobs/update', update);

// task path
app.use('/tasks/create', createTask);
app.use('/tasks/search', searchTask);
app.use('/tasks/delete', deleteTask);
app.use('/tasks/update', updateTask);

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

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
