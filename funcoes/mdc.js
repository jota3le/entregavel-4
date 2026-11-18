function calcularMDC(primeiroNumero, segundoNumero) {
  if (
    typeof primeiroNumero !== 'number' ||
    typeof segundoNumero !== 'number' ||
    !Number.isInteger(primeiroNumero) ||
    !Number.isInteger(segundoNumero)
  ) {
    throw new Error('Os valores devem ser números inteiros.');
  }

  let dividendo = Math.abs(primeiroNumero);
  let divisor = Math.abs(segundoNumero);

  while (divisor !== 0) {
    const resto = dividendo % divisor;
    dividendo = divisor;
    divisor = resto;
  }

  return dividendo;
}

module.exports = calcularMDC;