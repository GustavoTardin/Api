const express = require('express');
const validateToken = require('../middlewares/validateToken');
const { categoriesController } = require('../controllers');

const router = express.Router();

router.post('/', validateToken, categoriesController.insertCategorie);
router.get('/', validateToken, categoriesController.getCategories);

module.exports = router;