const requisicao = require('supertest');
const app = require('./app');

describe('Testa o serviço de inversão de strings', () => {
    test('Deve retornar a string original de forma invertida', async () => {
        let str = 'animal';
        //realisa uma requisicao ao serviço de inversao de strings passando a palavra animal como parametro 
        //a respots do serviço(HttpResponse) sera armazenada na variavel "resposta"
        let resposta =
            await requisicao(app).get(`/inverter/${str}`);
        let resultado = resposta.body.resultado;
        expect(resultado).toBe('lamina');

        str = 'b';

        resposta =
            await requisicao(app).get(`/inverter/${str}`);
        resultado = resposta.body.resultado;
        expect(resultado).toBe('b');

        str = 'f';

        resposta =
            await requisicao(app).get(`/inverter/${str}`);
        resultado = resposta.body.resultado;
        expect(resultado).toBe('f');

    });
});

describe('Treste de validaçõa de CPFs', () => {
    test('DEve retornar true ao receber um CPF válido', async () => {
        const cpfsValidos = [
            '05846343821',
            '96162750892',
            '86807332963',
            '51914853431',
            '75828331396',
            '87339925171',
        ];
        for (let i = 0; i < cpfsValidos.length; i++) {
            let resposta =
                await requisicao(app).get(`/cpf/${cpfsValidos[i]}`);
            let valido = resposta.body.valido;
            expect(valido).toBe(true);
        }
    });
    test('Deve retornar false ao receber um CPF inválido', async () => {
        const cpfsInvalidos = [
            '38604808008',
            '73211086007',
            '10527661083',
            '44352619000',
            '14479491084',
            '62783622004',
            '11157758120',
            'abc',
        ];
        for (let i = 0; i < cpfsInvalidos.length; i++) {
            let resposta =
                await requisicao(app).get(`/cpf/${cpfsInvalidos[i]}`);
            let valido = resposta.body.valido;
            expect(valido).toBe(false);
        }
    });
});