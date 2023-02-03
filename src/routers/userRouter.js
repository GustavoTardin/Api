const express = require('express');
const { validateDisplayName, validateEmailAndPassword } = require('../middlewares');
const { userController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const { authenticateToken } = require('../utils/JWT');

const router = express.Router();

router.post('/', validateDisplayName, validateEmailAndPassword, userController.insertUser);
router.get('/', validateToken, userController.getAll);
router.get('/:id', validateToken, userController.getById);
router.delete('/me', authenticateToken, userController.deleteByToken);
module.exports = router;