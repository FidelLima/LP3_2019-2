const express = require('express');

const logger = require('morgan');

const cors = require('cors');

const bodyParser = require('body-parser');

const rotasArtigo = require('./routes/artigo');
require('./databases/db'); 

const app = express();

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.json());

app.use('/artigos',rotasArtigo);

module.exports = app;