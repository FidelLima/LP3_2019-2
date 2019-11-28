const express = require('express');

const contatoCtrl = require('../controllers/ContatoController');

const router = express.Router();

router.get('/', contatoCtrl.recuperarTodos);
router.post('/', contatoCtrl.salvar);

module.exports = router;