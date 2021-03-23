var express = require('express');
var router = express.Router();
const { Status, StatusPh } = require('../sequelize')  
/* GET users listing. */
router.post('/', function(req, res, next) {
    StatusPh.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'ASC' ]]
    }).then(function(entries){
        //only difference is that you get users list limited to 1
        //entries[0]
        StatusPh.destroy({
            where: {
              id: entries[0].id
            }
          });
        StatusPh.create({
                nilai: req.body.ph,
                tabung:1
            }, { fields: ['nilai','tabung'] });
      }); 
    // console.log(req.body)
  res.send(req.body.ph);
});

router.get('/tabung_satu',function(req,res,next){
    StatusPh.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
    }).then(function(entries){
        //only difference is that you get users list limited to 1
        //entries[0]
        console.log(entries[0].id)
        res.send({nilai:entries[0].nilai});
      }); 
})

module.exports = router;
