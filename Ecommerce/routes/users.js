var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator');

const checkEmailMiddlewere = require('../middleweres/checkEmailMiddlewere');

var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//register
router.get('/register', usersController.register);
router.post('/register', usersController.store);

//login
router.get('/login', usersController.loginForm);
router.post('/login', usersController.login);

//logOut
router.post('/logOut', usersController.logOut);

//profile
router.get('/:id', usersController.profile);

module.exports = router;