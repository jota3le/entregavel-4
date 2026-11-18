function contarInteirosNoIntervalo(conjuntoDados, limiteSuperior) {
  if (!Array.isArray(conjuntoDados) || typeof limiteSuperior !== 'number') {
    throw new Error('Entradas inválidas: forneça um array de números e um limite numérico.');
  }

  let contador = 0;

  for (let i = 0; i < conjuntoDados.length; i++) {
    const valorAtual = conjuntoDados[i];
    if (typeof valorAtual === 'number' && Number.isInteger(valorAtual) && valorAtual <= limiteSuperior) {
      contador++;
    }
  }

  return contador;
}

module.exports = contarInteirosNoIntervalo;