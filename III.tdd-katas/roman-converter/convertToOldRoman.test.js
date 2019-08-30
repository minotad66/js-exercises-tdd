var converter= require("./convertToOldRoman.js");

test("convierte el numero 15 a 'XV'", function() {
  var result = converter(15);
  expect(result).toEqual('XV');
});

test("convierte el numero 1568 a 'MDLXVIII'", function() {
    var result = converter(1568);
    expect(result).toEqual('MDLXVIII');
  });

  test("convierte el numero 3000 a 'MMM'", function() {
    var result = converter(3000);
    expect(result).toEqual('MMM');
  });
