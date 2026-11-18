function calcularSomatorio(listaNumeros) {
  if (!Array.isArray(listaNumeros)) {
    throw new Error('A entrada deve ser um array de números.');
  }

  let somaTotal = 0;

  for (let i = 0; i < listaNumeros.length; i++) {
    if (typeof listaNumeros[i] !== 'number' || Number.isNaN(listaNumeros[i])) {
      throw new Error('Todos os elementos do array devem ser números válidos.');
    }
    somaTotal += listaNumeros[i];
  }

  return somaTotal;
}

module.exports = calcularSomatorio;