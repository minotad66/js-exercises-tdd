function convertToOldRoman(number) {
  let values = [1, 5, 10, 50, 100, 500, 1000];
  let letras = ["I", "V", "X", "L", "C", "D", "M"]
  let res = [];
  let num;
  let letra;
  let val;
  let pos;
  let insert;

  for (var i = 6; (num = values[i]), (letra = letras[i]); i--) {
    if (number >= num) {
      var r = Math.floor(number / num);
      number -= r * num;

      if (r < 4) {
        while (r--) {
          res.push(letra);
        }
      } else {
        val = res.pop();
        pos = (val ? letras.indexOf(val) : i) + 1;
        insert = letra + (letras[pos] || "M");
        res.push(insert);
      }
    } else {
      res.push("");
    }
  }

  return res.join("");
}

module.exports = convertToOldRoman;
