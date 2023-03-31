function calcular(valor) {
    var resultado = document.getElementById('resultado');
    if (valor === '=') {
      resultado.value = eval(resultado.value);
    } else if (valor === 'sqrt') {
      resultado.value = Math.sqrt(resultado.value);
    } else if (valor === '**') {
      resultado.value = Math.pow(resultado.value, 2);
    } else {
      resultado.value += valor;
    }
  }
  
  function limpar() {
    document.getElementById('resultado').value = '';
  }
  
  function apagar() {
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
  }
  