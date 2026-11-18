const ordenarComQuicksort = require('../funcoes/quicksort');

test('deve ordenar corretamente um array desordenado', () => {
  expect(ordenarComQuicksort([5, 4, 3, 1, 2])).toEqual([1, 2, 3, 4, 5]);
});

test('deve ordenar arrays com números negativos e repetidos', () => {
  expect(ordenarComQuicksort([100, -4, 3, 150, 3])).toEqual([-4, 3, 3, 100, 150]);
});