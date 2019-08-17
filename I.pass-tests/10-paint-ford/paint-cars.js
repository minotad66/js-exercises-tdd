function painted(car, colour){
    let arr = car;
    arr.forEach( (element) => {
        if(element.make === 'Ford'){
            element.colour = colour;
        }
    })

    return arr;
}

module.exports = painted;
