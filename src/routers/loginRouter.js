const express = require('express');
const validateLogin = require('../middlewares/validateLogin');
const { login } = require('../controllers/loginController');
// const { authenticateToken } = require('../utils/JWT');

const router = express.Router();

router.post('/', validateLogin, login);

module.exports = router;