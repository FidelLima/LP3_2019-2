const express = require('express');

const app = express();

// Nossos web services
app.use('/data', (req, res) => {
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    res.json(dataAtual);
});

app.use('/inverter/:str', (req, res) => {
    // Recupera a variável de parâmetro
    let str = req.params.str;
    // Inverte a string
    str = str.split('').reverse().join('');
    res.json({ resultado: str });
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
    let digitosIguais = true;

    if (cpf.length < 11) {
        return res.json({ valido: false });
    }
    for (let i = 0; i < cpf.length - 1; i++) {
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitosIguais = false;
            break;
        }
    }
    if (!digitosIguais) {
        let numeros = cpf.substring(0, 9);
        let digitos = cpf.substring(9);
        let soma = 0;

        for (let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) {
            return res.json({ valido: false });
        }

        numeros = cpf.substring(0, 10);
        soma = 0;
        for (let i = 11; i > 1; i--) {
            soma += numeros.charAt(11 - i) * i;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) {
            return res.json({ valido: false });
        }

        return res.json({ valido: true });
    }
    else {
        return res.json({ valido: false });
    }
});

module.exports = app;
