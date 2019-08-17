let greetPeople = require('./greet-people');

test("print list of names prefixed with Hello", function() {
  let mentors = ['Jhon', 'Jerson', 'John'];
  let result = greetPeople(mentors);
  let expected = 'Hello JhonJersonJohn';

  expect(result).toEqual(expected);
});
