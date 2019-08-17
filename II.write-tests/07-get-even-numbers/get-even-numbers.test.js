let numberPair = require('./get-even-numbers');

test("retorna los numeros pares", function() {
  let result = numberPair([22, 13, 73, 82, 4]);
  let expected = [22, 82, 4];
  expect(result).toEqual(expected);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
