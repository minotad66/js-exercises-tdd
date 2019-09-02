var converter = require("./calculator.js");

test("convierte el numero 15 a 'XV'", function() {
  var result = converter("6,2");
  expect(result).toEqual(8);
});

test("convierte el numero 1568 a 'MDLXVIII'", function() {
  var result = converter("1\n2,3");
  expect(result).toEqual(7);
});

test("convierte el numero 1568 a 'MDLXVIII'", function() {
  var result = converter("1,3,5,-1,64");
  expect(result).toEqual("no se admiten numeros negativos");
});

test("convierte el numero 1568 a 'MDLXVIII'", function() {
  var result = converter("5,1000");
  expect(result).toEqual(5);
});
