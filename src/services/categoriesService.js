const { Category } = require('../models');

const insertCategorie = async (name) => {
    const newUser = await Category.create({ name });

   return { type: null, message: newUser };
};

const getCategories = async () => {
    const categories = await Category.findAll();
    return { type: null, message: categories };
};

module.exports = {
    insertCategorie,
    getCategories,
};