let second_third = require('./get-second-third');

test("remove vowels from all words in array", function() {
  let result = second_third([90, 5, 11, 8, 6]);
  let expected = [6, 8];
  expect(result).toEqual(expected);
});



// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
