const express = require('express');
const router = express.Router();

const login_controllers = require('./login_controller');
router.use('/',login_controllers);

const signup_controllers = require('./signup_controller');
router.use('/',signup_controllers);

const home_controllers = require('./home_controller');
router.use('/',home_controllers);

module.exports = router;