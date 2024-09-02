function calcularPercentual(faturamentoPorEstado) {
    const total = Object.values(faturamentoPorEstado).reduce((a, b) => a + b, 0);
    const percentual = {};

    for (const estado in faturamentoPorEstado) {
        percentual[estado] = ((faturamentoPorEstado[estado] / total) * 100).toFixed(2);
    }

    // Convertendo os valores para números
    for (const estado in percentual) {
        percentual[estado] = parseFloat(percentual[estado]);
    }

    return percentual;
}

module.exports = calcularPercentual;
