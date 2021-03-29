var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

router.get('/test', mainController.test);

router.get('/check', mainController.check);

module.exports = router;