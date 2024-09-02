// test/faturamento.test.js

const analisarFaturamento = require('../src/faturamento/analiseFaturamento');

test('Deve calcular corretamente o menor, maior e dias acima da média', () => {
    const dados = [
        { valor: 2000 },
        { valor: 3000 },
        { valor: 1500 },
        { valor: 2500 }
    ];

    const resultado = analisarFaturamento(dados);
    expect(resultado.menorValor).toBe(1500);
    expect(resultado.maiorValor).toBe(3000);
    expect(resultado.diasAcimaMedia).toBe(2);
});
