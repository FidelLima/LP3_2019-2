const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.get('/buscarUsuario', usuarioController.buscarUsuario);

router.post('/salvarUsuario', usuarioController.salvarUsuario);

module.exports = router;
