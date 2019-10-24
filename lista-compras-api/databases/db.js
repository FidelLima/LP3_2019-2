const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/lista-compras-dev';

mongoose
    .connect(dbURI, { useNewUrlParser: true })
    .then(() => console.log('Mongoose conectado'))
    .catch(erro => console.log(erro));
