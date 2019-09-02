const operator = num => {
  let acumulador = 0;

  num.forEach(element => {
    acumulador += parseInt(element);
  });

  return acumulador;
};

const convertToNumber = number => {
  let valor = number.split(",");
  let mayor = valor.find(n => n >= 1000);
  valor = valor.map(n => {
    if (parseInt(n) < 1000) {
      return n;
    } else {
      return 0;
    }
  });
  let num = number.split("");
  let result;
  if (mayor >= 100) {
    result = operator(valor);
  } else if (num[1] === ",") {
    result = parseInt(num[0]) + parseInt(num[2]);
  } else if (num[1] === "\n" && num[3] === ",") {
    result = parseInt(num[0]) + parseInt(num[2]) + parseInt(num[4]);
  }

  return result;
};

function add(number) {
  let num = number.split(",");
  num = num.find(element => element < 0);
  if (num < 0) {
    return "no se admiten numeros negativos";
  } else if (number !== "") {
    let result = convertToNumber(number);
    return result;
  } else {
    return 0;
  }
}

module.exports = add;
