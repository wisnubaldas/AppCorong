var express = require('express');
const bodyParser = require('body-parser')
const { Status, StatusPh } = require('../sequelize')
var router = express.Router();
// Use the session middleware

// middleware that is specific to this router
router.use(function (req, res, next) {
  // console.log('Time:', Date.now())
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
  const statusPh = StatusPh.findAll({
    attributes: ['id','tabung', 'nilai','createdAt']
  });
  statusPh.then(function(result) {
    // console.log(result)
    // res.send({sdads:result})
    res.render('home', { message: req.session.belekok,data_ph:result });
});
  // res.render('home', { message: req.session.belekok });
});

// create a user
// router.post('/home/create_status', (req, res, next) => {
//   console.log(req.body)
//   Status.create(req.body)
//       .then(status => res.json(status))
//       // res.send(req.body);
// })

module.exports = router;
