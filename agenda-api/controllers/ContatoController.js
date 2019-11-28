const Contato = require('../models/Contato');

let contatos = [];

const controller = {
    recuperarTodos: (req, res) => res.json(contatos),
    salvar: (req, res) => {
        const dados = req.body;
        if (dados.nome && dados.telefone) {
            let contato = new Contato(dados);
            contatos.push(contato);
            return res.status(201).json(contato);
        } else {
            return res
                .status(400)
                .json({
                    mensagem: 'O nome ou o telefone não foi preenchido'
                });
        }
    }
};

module.exports = controller;