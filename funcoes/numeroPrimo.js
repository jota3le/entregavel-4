function verificarNumeroPrimo(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
    throw new Error('A entrada deve ser um número inteiro.');
  }

  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  const limiteVerificacao = Math.sqrt(numero);
  for (let divisor = 3; divisor <= limiteVerificacao; divisor += 2) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

module.exports = verificarNumeroPrimo;