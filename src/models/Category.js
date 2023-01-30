const categoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category',{
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true, },
        name: { type: DataTypes.STRING }
    }, { underscored: true, timestamps: false });
    return Category;
};

module.exports = categoryModel;