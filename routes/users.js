var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'User' });
});

router.post('/add', userController.addUser)
router.get('/test', function(res){
  res.send('hello')
})

module.exports = router;
