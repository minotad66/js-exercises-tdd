function painted(car, colour) {
  let arr = JSON.parse(JSON.stringify(car));
  //let arr = Object.assign({},car);
  arr.forEach(element => {
    if (element.make === "Ford") {
      element.colour = colour;
    }
  });

  return arr;
}

module.exports = painted;
