const express = require('express');
const { validateDisplayName, validateEmailAndPassword } = require('../middlewares');
const { userController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateDisplayName, validateEmailAndPassword, userController.insertUser);
router.get('/', validateToken, userController.getAll);
router.get('/:id', validateToken, userController.getById);
module.exports = router;