var total = 500;
var valor = 150;
var percentual = (valor / total) * 100;

var resultadoElemento = document.getElementById('resultadoPercentual');

resultadoElemento.textContent = 'O percentual de ' + valor + ' em relação a ' + total + ' é ' + percentual.toFixed(2) + '%.';
