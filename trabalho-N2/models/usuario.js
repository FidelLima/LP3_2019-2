const mongoose = require('mongoose');

var usuario = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
    }
});

var Usuario = mongoose.model('Usuario', usuario);

module.exports = Usuario;