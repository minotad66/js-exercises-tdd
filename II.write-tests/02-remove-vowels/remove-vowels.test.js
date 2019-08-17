let removeVowels = require('./remove-vowels');

test("remove vowels from word", function() {
  let result = removeVowels('samuel');
  let expected = 'sml';
  expect(result).toEqual(expected);
});