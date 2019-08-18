function secondLargest(numbers) {
    let num = Math.max(...numbers)
    let arr = numbers.map(element => {
        if(element === num){
            return 0;
        }
        else{
            return element;
        }
    })
    res = Math.max(...arr);

    return res;
}

module.exports = secondLargest;