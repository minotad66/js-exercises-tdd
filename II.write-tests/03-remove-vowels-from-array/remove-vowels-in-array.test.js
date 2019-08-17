let removeVowel = require('./remove-vowels-in-array');

test("remove vowels from all words in array", function() {
  let result = removeVowel(["Irina", "Etza", "Daniel"]);
  let expected = ["rn", "tz", "Dnl"];
  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
