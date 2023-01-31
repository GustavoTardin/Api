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
    if (!blogs) return { type: 404, message: 'Post does not exist' };
    return { type: null, message: blogs };
};

const updateById = async ({ idParams, idUser, body }) => {
    const { type, message } = await findByToken(idParams);
    if (type) return { type, message };
    if (message.userId !== idUser) return { type: 401, message: 'Unauthorized user' };
    await BlogPost.update(
    { title: body.title, content: body.content },
    { where: { id: idParams } },
);
    const updatedBlog = await findByToken(idParams);
    return { type: null, message: updatedBlog.message };
};

module.exports = {
    insertPost,
    findByToken,
    updateById,
};