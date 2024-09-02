const calcularSomaIndice = require('./src/indice/calcularSomaIndice.js');
const verificarFibonacci = require('./src/fibonacci/verificarFibonacci.js');
const analisarFaturamento = require('./src/faturamento/analiseFaturamento.js');
const calcularPercentual = require('./src/percentual/calcularPercentual.js');
const inverterString = require('./src/string/inverterString.js');

// Calcular a Soma do Índice
console.log("Calculando a soma do índice:");
calcularSomaIndice();

// Verificar Sequência de Fibonacci
console.log("\nVerificando se o número 8 pertence à sequência de Fibonacci:");
verificarFibonacci(8);

console.log("\nVerificando se o número 7 pertence à sequência de Fibonacci:");
verificarFibonacci(7);

// Analisar Faturamento Diário
const dadosFaturamento = [
    { dia: 1, valor: 2000 },
    { dia: 2, valor: 0 },
    { dia: 3, valor: 2500 },
    { dia: 4, valor: 3000 },
    // ... Adicione mais dados conforme necessário
];

console.log("\nAnalisando o faturamento diário:");
analisarFaturamento(dadosFaturamento);

// Calcular Percentual de Representação por Estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

console.log("\nCalculando o percentual de representação por estado:");
calcularPercentual(faturamentoPorEstado);

// Inverter String
console.log("\nInvertendo a string 'JavaScript':");
inverterString('JavaScript');
