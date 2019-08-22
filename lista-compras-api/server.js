const app = require('./app');

const PORTA = 3000;

app.listen(
    3000,
    () => console.log(`App ouvindo a porta ${PORTA}`)
);