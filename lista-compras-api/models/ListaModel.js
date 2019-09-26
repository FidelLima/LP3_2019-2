const ListaModel = (sequelize, DataTypes) => {

    const Lista = sequelize.define('Lista', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    return Lista;
};

module.exports = ListaModel;