const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const { authenticateToken } = require('../utils/JWT');

const router = express.Router();

router.post('/', validateToken, postController.insertPost);
router.get('/', authenticateToken, postController.findByToken);

module.exports = router;