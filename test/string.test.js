const inverterString = require('../src/string/inverterString.js');

test('Deve inverter a string corretamente', () => {
    const resultado = inverterString('JavaScript');
    expect(resultado).toBe('tpircSavaJ');
});
