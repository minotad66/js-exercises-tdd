var verify = require("./password-vefier");

test("prints 1", function() {
  var result = verify('');
  expect(result).toEqual(true);
});
