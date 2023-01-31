const { blogPost } = require('../services');

const insertPost = async (_req, _res) => {

};

const findByToken = async (req, res) => {
const { id } = req.user;

const result = await blogPost.findByToken(id);
res.status(200).json([result]);
};

module.exports = {
    insertPost,
    findByToken,
};