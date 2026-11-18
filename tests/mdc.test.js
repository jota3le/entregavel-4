const calcularMDC = require('../funcoes/mdc');

test('deve calcular corretamente o MDC entre 48 e 18', () => {
  expect(calcularMDC(48, 18)).toBe(6);
});

test('deve retornar o próprio número quando o outro valor for 0', () => {
  expect(calcularMDC(15, 0)).toBe(15);
});

test('deve lançar erro ao receber valores não inteiros', () => {
  expect(() => calcularMDC(10.5, 5)).toThrow();
});