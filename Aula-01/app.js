const express = require ('express');

const app = express();

app.use('/data', (req,res) => { 
    let dataAtual = new Date();
    dataAtual=dataAtual.toLocaleDateString();
    res.json(dataAtual);
});

app.use('/inverter/:str', (req,res) => {
    // recupera a variavel de parametro
    let str = req.params.str;
    //inverte a string
    str=str
    .split('')
    .reverse()
    .join('');
    res.json(str);
 });

app.use('/cpf:cpf', (req,res) => {
   let cpf = req.params.cpd;
   // tomamo no cu
   res.setDefaultEncoding('Validador de CPF')
 });



app.listen(3000,
    () => console.log('Servidor iniciado')
    );