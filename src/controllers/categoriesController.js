const { categoriesService } = require('../services');

const insertCategorie = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const { message } = await categoriesService.insertCategorie(name);
    return res.status(201).json(message);
};

module.exports = {
    insertCategorie,
};