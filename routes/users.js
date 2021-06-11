var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('index', { title: 'User' });
});

router.get('/add', userController.addUser)

module.exports = router;
