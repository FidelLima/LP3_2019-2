const express = require ('express');
const logger = require ('morgan');
const cors = require ('cors');
const bodyParser = require ('body-parser');

const app =express();

app.use(logger('dev')); // tudo que receber no app vai aparecer por ele 
app.use(cors());// ao utilizar isso sem nem um argumernto/parametro vc ta liberando oo sacesso  a outros serviços para qualquer outra aplicação que tenha acesso a net

app.use(bodyParser.json()); //permite que o app express consiga entender dados do front end em formato json 

module.exports=app;