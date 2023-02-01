const blogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true, },
        title: { type: DataTypes.STRING },
        content: { type: DataTypes.STRING },
        userId: { type: DataTypes.STRING, foreignKey: true },
        published: { type: DataTypes.DATE },
        updated: { type: DataTypes.DATE },
    },{ underscored: true, timestamps: false });
    
    BlogPost.associate = ({User}) => {
        BlogPost.belongsTo(User, 
            {
                foreignKey: 'userId', as: 'user' }
            );
        };
        return BlogPost;
};

module.exports = blogPostModel;