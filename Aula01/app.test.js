const requisicao = require('supertest');
const app = require('./app');

describe('Testa o serviço de inversão de strings', () => {
    test('Deve retornar a string original de forma invertida', async () => {
        let str = 'animal';
        /**
         * Realiza uma requisição ao serviço
         * de inversão de strings, passando a
         * palavra "animal" como parâmetro.
         * A resposta do serviço (HttpResponse) será armazenada
         * na variável "resposta".
         */
        let resposta = await requisicao(app).get(`/inverter/${str}`);
        // body representa o corpo da resposta
        //let abacaxi = resposta.body.resultado;
        let { resultado } = resposta.body;
        /**
         * Espero que o valor da variável resultado
         * seja igual a "lamina"
         */
        expect(resultado).toBe('lamina');
        str = 'b';
        resposta =
            await requisicao(app).get(`/inverter/${str}`);
        // resultado = resposta.body.resultado;
        ({ resultado } = resposta.body);
        expect(resultado).toBe('b');
        str = 'Sidney';
        resposta =
            await requisicao(app).get(`/inverter/${str}`);
        // resultado = resposta.body.resultado;
        ({ resultado } = resposta.body);
        expect(resultado).toBe('yendiS');
    });
});

describe('Testa o serviço de validação de CPFs', () => {
    test('Deve retornar true ao receber um CPF válido', async () => {
        const cpfsValidos = [
            '16856431406',
            '53808206896',
            '72514279909',
            '22034673123',
            '79723785170',
            '62166558259'
        ];

        for (let i = 0; i < cpfsValidos.length; i++) {
            let resposta =
                await requisicao(app).get(`/cpf/${cpfsValidos[i]}`);
            // let abobora = resposta.body.valido;
            let { valido } = resposta.body;
            expect(valido).toBe(true);
        }
    });

    test('Deve retornar false ao receber um CPF inválido', async () => {
        const cpfsInvalidos = [
            '11727373714',
            '21375370870',
            '03082275221',
            '03082275224',
            '00000000000',
            '1234',
            'abc'
        ];

        for (let i = 0; i < cpfsInvalidos.length; i++) {
            let resposta =
                await requisicao(app).get(`/cpf/${cpfsInvalidos[i]}`);
            let { valido } = resposta.body;
            expect(valido).toBe(false);
        }
    });
});