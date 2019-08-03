const http = require('http'); // importa a dependencia 


const endereco = '127.0.0.1'; // endereco do servidor 

const porta =3000; // local do serve

const servidor = http.createServer((req, res) => {
    res.statusCode = 200; // 200 significa ok
    res.setHeader('Content-Type','text/plain');
    res.end('Salve, Rapaziadaaaaaaaaaaaaaaaaaaaaaaaaaa')
}
    
);

// vai coloar no git hub

servidor.listen(porta, endereco,
    () => console.log('Server started')
    ); 