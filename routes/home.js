var express = require('express');
const bodyParser = require('body-parser')
const { Status } = require('../sequelize')
var router = express.Router();
// Use the session middleware

// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  

  if(!req.session.belekok)
  {
    res.redirect('/');
  }else{
    req.session.save( function(err) {
      req.session.reload( function (err) {
            next()
        });
    });
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  // Status.findAll().then(status => res.render('index', { stat: JSON.stringify(status,null,2)}));
  res.render('home', { message: req.session.belekok });
});

// create a user
// router.post('/home/create_status', (req, res, next) => {
//   console.log(req.body)
//   Status.create(req.body)
//       .then(status => res.json(status))
//       // res.send(req.body);
// })

module.exports = router;
