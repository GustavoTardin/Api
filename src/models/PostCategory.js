const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        categoryId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true, allowNull: false },
        postId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true, allowNull: false },
    }, { underscored: true, timestamps: false });

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
            otherKey: 'categoryId' 
        });
    };
    return PostCategory;
};

module.exports = PostCategoryModel;