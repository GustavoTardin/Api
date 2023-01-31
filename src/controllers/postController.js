const { blogPost } = require('../services');

const insertPost = async (_req, _res) => {

};

const findAll = async (req, res) => {
const { id } = req.user;

const result = await blogPost.findAll(id);
res.status(200).json([result]);
};

module.exports = {
    insertPost,
    findAll,
};