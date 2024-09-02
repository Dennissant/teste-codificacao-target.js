const verificarFibonacci = require('../src/fibonacci/verificarFibonacci.js');

test('Deve retornar true para número que pertence à sequência de Fibonacci', () => {
    expect(verificarFibonacci(8)).toBe(true);
});

test('Deve retornar false para número que não pertence à sequência de Fibonacci', () => {
    expect(verificarFibonacci(7)).toBe(false);
});
