var converter = require("./calculator.js");

test("convierte el numero 15 a 'XV'", function() {
    var result = converter('1;2');
    expect(result).toEqual(3);
  });

// test("convierte el numero 1568 a 'MDLXVIII'", function() {
//     var result = converter('');
//     expect(result).toEqual(0);
//   });

