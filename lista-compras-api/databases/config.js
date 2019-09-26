const config = {
    'development': {
        db: 'lista_compras_dev',
        user: 'dev',
        password: 'senha123',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    },
    'test': {
        db: 'lista_compras_test',
        user: 'dev',
        password: 'senha123',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }
};

module.exports = config;