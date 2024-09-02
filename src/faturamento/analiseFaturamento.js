function analisarFaturamento(dados) {
    const valores = dados.map(d => d.valor);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    const diasAcimaMedia = valores.filter(v => v > media).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaMedia
    };
}

module.exports = analisarFaturamento;
