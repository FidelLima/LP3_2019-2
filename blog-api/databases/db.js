const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/artigo'; 

mongoose
    .connect(dbURI, {useNewUrlParser:true})
    .then(() => console.log('Mongoose Conectado'))
    .catch(erro => console.log(erro));