const { calcularPercentual } = require('../src/calcularPercentual');

test('Deve calcular corretamente o percentual de cada estado', () => {
    const faturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const resultado = calcularPercentual(faturamentoPorEstado);
    expect(resultado.SP).toBeCloseTo(37.53, 2); 
    expect(resultado.RJ).toBeCloseTo(20.30, 2);
    expect(resultado.MG).toBeCloseTo(16.17, 2);
    expect(resultado.ES).toBeCloseTo(15.03, 2);
    expect(resultado.Outros).toBeCloseTo(10.98, 2);
});
