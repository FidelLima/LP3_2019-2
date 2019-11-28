const http = require('http');

const endereco = '127.0.0.1';
const porta = 3000;

const servidor = http.createServer(
    (req, res) => {
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/plain');
        res.end('Fala, negada!');
    }
);

servidor.listen(porta, endereco,
    () => console.log('Servidor iniciado')
);