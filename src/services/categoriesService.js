const { Category } = require('../models');

const insertCategorie = async (name) => {
    const newUser = await Category.create({ name });

   return { type: null, message: newUser };
};

module.exports = {
    insertCategorie,
};