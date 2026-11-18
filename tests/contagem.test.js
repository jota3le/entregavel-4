const contarInteirosNoIntervalo = require('../funcoes/contagem');

test('deve contar corretamente os inteiros menores ou iguais ao limite', () => {
  expect(contarInteirosNoIntervalo([1, 5, 10, 15, 20], 10)).toBe(3);
});

test('deve retornar 0 quando nenhum número estiver dentro do limite', () => {
  expect(contarInteirosNoIntervalo([12, 15, 20], 5)).toBe(0);
});

test('deve lançar erro quando as entradas forem inválidas', () => {
  expect(() => contarInteirosNoIntervalo('não é array', 10)).toThrow();
});