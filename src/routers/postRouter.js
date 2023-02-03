const express = require('express');
const { postController } = require('../controllers');
const { validateTitleAndContent, validateToken, validateInsertNewPost } = require('../middlewares');
const { authenticateToken } = require('../utils/JWT');

const router = express.Router();

router.post('/', authenticateToken, validateInsertNewPost, postController.insertPost);
router.get('/', authenticateToken, postController.findByToken);
router.get('/search', authenticateToken, postController.getPostBySearch);
router.get('/:id', validateToken, postController.findById);
router.put('/:id', authenticateToken, validateTitleAndContent, postController.updateById);
router.delete('/:id', authenticateToken, postController.deleteById);

module.exports = router;