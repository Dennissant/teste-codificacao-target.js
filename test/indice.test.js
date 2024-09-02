const calcularSomaIndice = require('../src/indice/calcularSomaIndice.js');

test('Deve calcular a soma do índice corretamente', () => {
    const resultado = calcularSomaIndice();
    expect(resultado).toBe(91); // O resultado esperado é 91
});
