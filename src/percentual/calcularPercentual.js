var faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

var total = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

for (var estado in faturamentoEstados) {
    var percentual = (faturamentoEstados[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
