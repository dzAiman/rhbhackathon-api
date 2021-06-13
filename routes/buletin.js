var express = require('express');
var router = express.Router();
const buletinController = require('../controller/buletinController')

router.get('/', buletinController.getBuletin);

// router.post('/add', buletinController.addBuletin)

module.exports = router;
