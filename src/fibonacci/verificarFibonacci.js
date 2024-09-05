function pertenceAFibonacci(num) {
    let a = 0, b = 1, c;
    if (num === 0 || num === 1) return `O número ${num} pertence à sequência de Fibonacci.`;

    while (b < num) {
        c = a + b;
        a = b;
        b = c;
    }

    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

console.log(pertenceAFibonacci(21));  // Teste com um número que pertence
console.log(pertenceAFibonacci(22));  // Teste com um número que não pertence
