var indice = 13;  
var soma = 0;    
var k = 0;       
while (k < indice) {
    k++;           
    soma += k;     
}

var resultadoElemento = document.getElementById('resultadoIndice');

resultadoElemento.textContent = 'A soma dos números de 1 até ' + indice + ' é ' + soma;
