const Lista = require('../models/Lista');
const Item = require('../models/Item');
const controller = {

    recuperarItens: async (req, res) => {
        const {filtro} = req.body;
        const itens = await Item.find({
             descricao:{ '$regex':filtro, '$options': 'i'} //comeca a fazer a busca so com as primeiras letras escritas
            });
        return res.json(itens);
    },

    salvar: (req, res) => {
        const { nome } = req.body;
        if (nome) {
            const lista = req.body;
            Lista
                .create(lista)
                .then(listaSalva => res.status(201).json(listaSalva))
                .catch(erro => {
                    console.log(erro);
                    res.status(500).json({
                        mensagem: 'Erro ao tentar salvar a lista'
                    });
                });
        } else {
            return res.status(400).json({
                mensagem: 'Nome não informado'
            });
        }
    }
};

module.exports = controller;