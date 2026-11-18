function ordenarComQuicksort(listaNumeros) {
  if (!Array.isArray(listaNumeros) || !listaNumeros.every((item) => typeof item === 'number')) {
    throw new Error('A entrada deve ser um array contendo apenas números.');
  }

  if (listaNumeros.length <= 1) {
    return [...listaNumeros];
  }

  const pivo = listaNumeros[listaNumeros.length - 1];
  const menores = [];
  const maiores = [];

  for (let i = 0; i < listaNumeros.length - 1; i++) {
    if (listaNumeros[i] < pivo) {
      menores.push(listaNumeros[i]);
    } else {
      maiores.push(listaNumeros[i]);
    }
  }

  return [...ordenarComQuicksort(menores), pivo, ...ordenarComQuicksort(maiores)];
}

module.exports = ordenarComQuicksort;