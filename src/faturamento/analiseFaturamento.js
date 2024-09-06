var faturamento = [1000, 2000, 1500, 3000, 2500]

var totalFaturamento = faturamento.reduce(function (acc, valor) {
    return acc + valor;
}, 0);

var resultadoElemento = document.getElementById('resultadoFaturamento');

resultadoElemento.textContent = 'O faturamento total é R$ ' + totalFaturamento;
