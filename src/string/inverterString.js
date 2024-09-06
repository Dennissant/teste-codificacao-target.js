function inverterString(str) {
    return str.split('').reverse().join('');
}

var texto = 'Hello, World!';
var textoInvertido = inverterString(texto);

var resultadoElemento = document.getElementById('resultadoInverterString');

resultadoElemento.textContent = 'O texto invertido é: ' + textoInvertido;
