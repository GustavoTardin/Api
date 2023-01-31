const { blogPost } = require('../services');

const insertPost = async (_req, _res) => {

};

const findByToken = async (req, res) => {
const { id } = req.user;

const result = await blogPost.findByToken(id);
res.status(200).json([result]);
};

const findById = async (req, res) => {
    const { id } = req.params;

    const { type, message } = await blogPost.findByToken(id);
    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
};

const updateById = async (req, res) => {
    const { id } = req.params;

    const serviceParameter = {
        idParams: id,
        idUser: req.user.id,
        body: req.body,
    };

    const { type, message } = await blogPost.updateById(serviceParameter);
    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
};

module.exports = {
    insertPost,
    findByToken,
    findById,
    updateById,
};