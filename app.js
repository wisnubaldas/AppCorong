var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var session = require('express-session');
const Sequelize = require('sequelize')
// const SessionStore = require('express-session-sequelize')(session.Store);
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// const uuid = require('uuid').v4

// config session ke sqlite
// const sequelize = new Sequelize('mainDB', null, null, {    
//   dialect: "sqlite",
//   storage: './cancut.sqlite',
// });
// const sequelizeSessionStore = new SessionStore({
//   db: sequelize,
// });
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var app = express();
app.use(express.urlencoded({
  extended: true
}))

// // pake session sqlite
// app.use(cookieParser());
// app.use(session({
//     genid: (req) => {
//         // console.log('Inside the session middleware')
//         //  console.log(req.sessionID)
//          return uuid() // use UUIDs for session IDs
//        },
//     secret: 'keyboard cat',
//     store: sequelizeSessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000 }
// }));

// // add & configure middleware
// app.use(session({
//   genid: (req) => {
//     // console.log('Inside the session middleware')
//     // console.log(req.sessionID)
//     return uuid() // use UUIDs for session IDs
//   },
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('models',path.join(__dirname,'models'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// config route
require("./routes/routes")(app);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// app.use(reload(__dirname+'/bin/www'));
module.exports = app;
