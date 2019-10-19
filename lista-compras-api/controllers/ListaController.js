
const Lista = require('../models/Lista');

const controller = {
   salvar: (req, res) => {
        const {nome} = req.body;
        if(nome){
            Lista
            .create(Lista)

            .then(listaSalva => res.status(201).json(listaSalva))

            .catch(erro => {
                console.log(erro);
                res.status(500).json({
                    mensagem:"Erro ao salvar a lista"
                })
            });
        }else{
            return res.status(400).json({mensagem:"Nome não foi informado"});
        }


    }
};

module.exports = controller;