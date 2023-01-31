 const { BlogPost, Category, User } = require('../models');

const insertPost = async () => {

};

const findByToken = async (id) => {
    const blogs = await BlogPost.findByPk(id, {
        include: [
            {
                model: User,
                as: 'user',
                attributes: {
                    exclude: ['password'],
                },
            },
            {
                model: Category,
                as: 'categories',
                through: { attributes: [] },
            },
        ],
    });
    return blogs;
};

module.exports = {
    insertPost,
    findByToken,
};