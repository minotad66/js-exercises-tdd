let largestNumber = require('./largest-number');

test("retorna el mayor de los numeros", function() {
  let result = largestNumber([3, 21, 88, 4, 36]);
  let expected = 88;
  expect(result).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
