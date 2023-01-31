const express = require('express');
const { postController } = require('../controllers');
const { validateTitleAndContent, validateToken } = require('../middlewares');
const { authenticateToken } = require('../utils/JWT');

const router = express.Router();

router.post('/', validateToken, postController.insertPost);
router.get('/', authenticateToken, postController.findByToken);
router.get('/:id', validateToken, postController.findById);
router.put('/:id', authenticateToken, validateTitleAndContent, postController.updateById);

module.exports = router;