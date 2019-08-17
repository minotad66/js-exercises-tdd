var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
    let output = largerThanTen([4, 10, 32, 9, 21]);
    let expected = [32, 21];
    expect(output).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];

