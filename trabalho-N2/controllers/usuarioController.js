const UsuarioModel = require('../models/usuario');

const controller = {
    buscarUsuario: async (req, res) => {
        const email = req.body.email;

        let usr = await UsuarioModel.findOne({email});;

        let dadosUsr = {
            nomeUsr:usr.nome,
            emailUsr: usr.email,
            senhaUsr: usr.senha
        }

        if(dadosUsr.emailUsr !== '') {
            return res.send(dadosUsr);
        }else{
            let message = 'Falha ao buscar usuário. Tente novamente.';
            return res.status(500).send(message);
        }
    },

    salvarUsuario: async (req, res) => {
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
        const confirmarSenha = req.body.confirmarSenha;

        let dados = {
            nome,
            email,
            senha
        }
        
        if(confirmarSenha === senha && confirmarSenha.length >= 18 ){
            let usuarioModel = new UsuarioModel(dados);

            if(email === ''){
                return res.status(400).send("Preencha o campo e-mail.");
            }else if(nome === ''){
                return res.status(400).send("Preencha o campo nome.");
            }else{
                try {
                    await usuarioModel.save();
                    return res.status(201).send("Sucesso ao adicionar Usuário");
                } catch (e) {
                    await instituicao.remove();
                    return res.status(400).send("Falha ao salvar Usuário");
                }
            }

        }else{
            let message = 'Redigite as senhas, estando atento ao limite minimo. Tente novamente.';
            return res.status(400).send(message);
        }

    }
};

module.exports = controller;