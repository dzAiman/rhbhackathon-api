var express = require('express');
var router = express.Router();
const contractController = require('../controller/contractController')

router.get('/', contractController.getContract);

router.post('/add', contractController.addContract)

module.exports = router;
