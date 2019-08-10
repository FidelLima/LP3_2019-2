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
    res.json({resultado: str});
 });

 app.use('/cpf/:cpf', (req, res) => { 
    let cpf = req.params.cpf;
    let som = 0;
    let cod;
    som = 0;
    //cpf com valores iguais 
  if (cpf == "00000000000") res.json({valido:false});

  for (i=1; i<=9; i++) som = som + parseInt(cpf.substring(i-1, i)) * (11 - i);
  cod = (som * 10) % 11;
   
    if ((cod == 10) || (cod == 11))  cod = 0;
    if (cod != parseInt(cpf.substring(9, 10)) ) res.json({valido:false});
   
    som = 0;
    for (i = 1; i <= 10; i++) som = som + parseInt(cpf.substring(i-1, i)) * (12 - i);
    cod = (som * 10) % 11;
   
    if ((cod == 10) || (cod == 11))  cod = 0;
    if (cod != parseInt(cpf.substring(10, 11) ) ) res.json({valido:false});
    res.json({valido:true});
});

module.exports=app; //esporta 
