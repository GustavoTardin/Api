const { Op } = require('sequelize');
const { Category } = require('../../models');

const validateCategoryIds = async (ids) => {
    const categories = await Category.findAll({
        where: { id: { [Op.in]: ids } },
    });
    if (ids.length === categories.length) {
        return true;
    }
    return false;
};

module.exports = validateCategoryIds;