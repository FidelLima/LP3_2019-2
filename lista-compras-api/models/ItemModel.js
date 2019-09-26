const ItemModel = (sequelize, DataTypes) => {

    const Item = sequelize.define('Item', {
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unidade: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    return Item;
};

module.exports = ItemModel;