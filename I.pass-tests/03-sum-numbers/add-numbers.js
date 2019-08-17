function addNumbers(numbers) {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}
module.exports = addNumbers;

