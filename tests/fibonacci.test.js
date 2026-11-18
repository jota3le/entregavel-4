const gerarSequenciaFibonacci = require('../funcoes/fibonacci');

test('os 10 primeiros números da contagem de fibonacci devem ser os corretos', () => {
  expect(gerarSequenciaFibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('os 2 primeiros números da contagem de fibonacci devem ser 0 e 1', () => {
  expect(gerarSequenciaFibonacci(2)).toMatchObject([0, 1]);
});

test('deve lançar erro para quantidade negativa de termos', () => {
  expect(() => gerarSequenciaFibonacci(-5)).toThrow();
});