function isFibonacci(num) {
    var a = 0, b = 1, c;
    while (a < num) {
        c = a + b;
        a = b;
        b = c;
    }
    return a === num;
}

var numero = 21; 
var resultado = isFibonacci(numero) ? 'é' : 'não é';

var resultadoElemento = document.getElementById('resultadoFibonacci');

resultadoElemento.textContent = 'O número ' + numero + ' ' + resultado + ' um número Fibonacci.';
