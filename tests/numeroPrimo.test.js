const verificarNumeroPrimo = require('../funcoes/numeroPrimo');

test('deve retornar true para números primos como 7 e 13', () => {
  expect(verificarNumeroPrimo(7)).toBe(true);
  expect(verificarNumeroPrimo(13)).toBe(true);
});

test('deve retornar false para números não primos como 1, 4 e 15', () => {
  expect(verificarNumeroPrimo(1)).toBe(false);
  expect(verificarNumeroPrimo(4)).toBe(false);
  expect(verificarNumeroPrimo(15)).toBe(false);
});