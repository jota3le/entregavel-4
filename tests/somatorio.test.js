const calcularSomatorio = require('../funcoes/somatorio');

test('deve somar corretamente números positivos', () => {
  expect(calcularSomatorio([10, 20])).toBe(30);
});

test('deve somar corretamente números negativos e positivos', () => {
  expect(calcularSomatorio([-10, 20, 5])).toBe(15);
});