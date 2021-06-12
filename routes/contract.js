var express = require('express');
var router = express.Router();
const contractController = require('../controller/contractController')

router.get('/', contractController.getContract);

router.post('/add', contractController.addContract)
router.put('/edit', contractController.addContract)
router.delete('/delete', contractController.addContract)

module.exports = router;
