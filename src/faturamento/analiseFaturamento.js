var faturamento = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    // Restante dos dados omitido para simplificação
];

var menor = Infinity, maior = -Infinity, soma = 0, diasComFaturamento = 0;

// Calcula menor, maior e soma para média
faturamento.forEach(dia => {
    if (dia.valor > 0) {
        menor = Math.min(menor, dia.valor);
        maior = Math.max(maior, dia.valor);
        soma += dia.valor;
        diasComFaturamento++;
    }
});

var media = soma / diasComFaturamento;
var diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
