// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average (numbers){
    let result = 0;
    let arr = numbers.filter(num => typeof(num) === 'number');
    arr.forEach(element => { result += element })
    return result/arr.length;
};

module.exports = average;