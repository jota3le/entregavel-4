function gerarSequenciaFibonacci(quantidadeTermos) {
  if (typeof quantidadeTermos !== 'number' || !Number.isInteger(quantidadeTermos) || quantidadeTermos < 0) {
    throw new Error('A quantidade de termos deve ser um número inteiro não negativo.');
  }

  if (quantidadeTermos === 0) return [];
  if (quantidadeTermos === 1) return [0];

  const sequencia = [0, 1];

  for (let i = 2; i < quantidadeTermos; i++) {
    const proximoTermo = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(proximoTermo);
  }

  return sequencia;
}

module.exports = gerarSequenciaFibonacci;