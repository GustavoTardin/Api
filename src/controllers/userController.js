const { userService } = require('../services');

const insertUser = async (req, res) => {
    const { type, message } = await userService.insertUser(req.body);

    if (type) return res.status(409).json({ message });

    return res.status(201).json({ token: message });
};

const getAll = async (req, res) => {
    const { message } = await userService.getAll();

    res.status(200).json(message);
};

module.exports = {
    insertUser,
    getAll,
};