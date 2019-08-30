const convertToNumber = (number) => {
    let arrNumber = number.split(',');

    let result = arrNumber.filter(num =>{
        let numNew = num.split('');
        console.log(numNew)
        let point = numNew.find(search => search === ';')
        if(point === ';'){
            num = numNew.map(num => (num === ';') ? 0 : num)
            numNew = num.map(a => parseInt(a))
            num = numNew.reduce((a, b) => a + b);
            console.log(num);
            return num;
        }
        /* else if(num.search(/[0-9]/) !== -1 && point !== ';'){
            return num;
        }
        else{
            return 0
        }; */
    });

    console.log(result)
    return result;
};

function add(number) {
    if (number !== '') {
        let result = convertToNumber(number);
        console.log(result)
        return result.reduce((a=0, b=0) => a + b);
    }
    else{
        return 0;
    }
  }
  
  module.exports = add;
  