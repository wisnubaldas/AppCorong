var express = require('express');
// const bodyParser = require('body-parser')
var router = express.Router();
const uuid = require('uuid').v4
const session = require('express-session')
const Sequelize = require('sequelize')
const SessionStore = require('express-session-sequelize')(session.Store);
var cookieParser = require('cookie-parser');

const sequelize = new Sequelize('mainDB', null, null, {    
  dialect: "sqlite",
  storage: './cancut.sqlite',
});
const sequelizeSessionStore = new SessionStore({
  db: sequelize,
});
// pake session sqlite
router.use(cookieParser());
router.use(session({
    secret: 'keyboard cat',
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login',{ login:'Login Page' })
  // console.log(req)
  // const uniqueId = uuid()
  // res.send(`Hit home page. Received the unique id: ${uniqueId}\n`)
});

router.post('/auth', function (req, res, next) {
  if(req.body.email == 'root')
  {
    req.session.belekok = 'Root User'
    req.session.save( function(err) {
      req.session.reload( function (err) {
           res.redirect('/home');
        });
    });
    // console.log('session id di auth',req.sessionID)
    // res.redirect('/home');
  }else{
    res.redirect('/');
  }
})

module.exports = router;
