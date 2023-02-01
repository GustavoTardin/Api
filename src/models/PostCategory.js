const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        categoryId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
        postId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    }, { underscored: true, timestamps: false, tableName: 'posts_categories' });

    PostCategory.associate = ({ Category, BlogPost }) => {
        Category.belongsToMany(BlogPost, {
            through: PostCategory,
            as: 'posts',
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });

        BlogPost.belongsToMany(Category, {
            through: PostCategory,
            as: 'categories',
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
    };
    return PostCategory;
};

module.exports = PostCategoryModel;