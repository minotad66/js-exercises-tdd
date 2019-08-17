function secondLargest(numbers) {
    let res = numbers[0];
    for(let i=1; i < numbers.length; i++){
        if(res < numbers[i]){
            res = numbers[i];
        }
    }
    return res;
}

module.exports = secondLargest;