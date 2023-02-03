 const { Op } = require('sequelize');
const { BlogPost, Category, User, PostCategory } = require('../models');
const validateCategoryIds = require('./validations/validateCategoryIds');

const insertPost = async (title, content, categoryIds, id) => {
    if (await validateCategoryIds(categoryIds) === false) {
        return { type: 400, message: 'one or more "categoryIds" not found' };
    }
    const result = await BlogPost.create({
         title, content, userId: id, 
    });

const insertPostCategories = await categoryIds.map((e) => ({
    postId: result.id,
    categoryId: e,
}));

await PostCategory.bulkCreate(insertPostCategories);

   return { type: null, message: result };
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
    if (!blogs) return { type: 404, message: 'Post does not exist' };
    return { type: null, message: blogs };
};

const checkBlogOwner = async (idParams, idUser) => {
    const { type, message } = await findByToken(idParams);
    if (type) return { type, message };
    if (message.userId !== idUser) return { type: 401, message: 'Unauthorized user' };
    return { type: null, message: 'Id Checks!!' };
};

const updateById = async ({ idParams, idUser, body }) => {
    const { type, message } = await checkBlogOwner(idParams, idUser);
    if (type) return { type, message };
    await BlogPost.update(
    { title: body.title, content: body.content },
    { where: { id: idParams } },
);
    const updatedBlog = await findByToken(idParams);
    return { type: null, message: updatedBlog.message };
};

const deleteById = async (idParams, idUser) => {
    const { type, message } = await checkBlogOwner(idParams, idUser);
    if (type) return { type, message };

   await BlogPost.destroy({ where: { id: idParams } });
    return { type: null, message: '' };
};

const getPostBySearch = async (q) => {
    const postsByTitle = await BlogPost.findAll({
        where: { title: { [Op.like]: `%${q}%` } },
        include: [{ model: User, as: 'user' }, {
            model: Category,
            as: 'categories',
        }],
    });
    const postsByContent = await BlogPost.findAll({
        where: { content: { [Op.like]: `%${q}%` } },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
            model: Category,
            as: 'categories',

        }],
    });
    if (postsByTitle.length > 0) {
        return { type: null, message: postsByTitle };
    }
    return { type: null, message: postsByContent };
};

module.exports = {
    insertPost,
    findByToken,
    updateById,
    deleteById,
    getPostBySearch,
};