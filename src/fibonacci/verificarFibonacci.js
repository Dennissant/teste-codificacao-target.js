function verificarFibonacci(num) {
    let a = 0, b = 1, temp;

    while (b < num) {
        temp = a;
        a = b;
        b = temp + b;
    }

    return num === b || num === 0;
}

module.exports = verificarFibonacci;
