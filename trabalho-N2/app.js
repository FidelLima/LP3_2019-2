const express = require('express');

const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./db');

const app = express();
const rotaUsuario = require('./routes/usuario');

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.json());

app.use('/usuario', rotaUsuario);

module.exports = app;