const express = require('express');
const artigo = require('../controllers/Artigo');
const router = express.Router();


router.get('/recupera', artigo.recuperaArtigos);

router.post('/salva',artigo.salvar);

router.put('/:id', artigo.atualizar);

router.delete('/:id', artigo.remover);


module.exports = router;