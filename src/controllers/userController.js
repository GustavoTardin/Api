const { userService } = require('../services');

const insertUser = async (req, res) => {
    const { type, message } = await userService.insertUser(req.body);

    if (type) return res.status(409).json({ message });

    return res.status(201).json({ token: message });
};

const getAll = async (_req, res) => {
    const { message } = await userService.getAll();

    res.status(200).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.getById(id);

    if (type) return res.status(type).json({ message });

    res.status(200).json(message);
};
const deleteByToken = async (req, res) => {
    const { id } = req.user;

    const { type, message } = await userService.deleteByToken(id);
    if (type) return res.status(type).json({ message });
    return res.status(204).send();
};

module.exports = {
    insertUser,
    getAll,
    getById,
    deleteByToken,
};