const number = /[0-9]/;
const lower_case = /[a-z]/;
const upper_case = /[A-Z]/;
const msj = ["numeros", "letras mayuscula", "letras minuscula"];

let verifyPassword = (password, test, msj) => {
  if (password.search(test) !== -1) {
    return true;
  } else {
    console.log(`la contraseña debe tener ${msj}`);
    return false;
  }
};
let sizePassword = password => {
  if (password.length > 8) {
    return true;
  } else {
    console.log(`la contraseña debe tener minimo 8 caracteres`);
    return false;
  }
};
let emptyPassword = password => {
  if (password !== "") {
    return true;
  } else {
    console.log(`la contraseña esta vacia`);
    return false;
  }
};

function Verify(password) {
  let Verify_empty = emptyPassword(password);
  let Verify_size = sizePassword(password);
  let Verify_num = verifyPassword(password, number, msj[0]);
  let Verify_LC = verifyPassword(password, lower_case, msj[2]);
  let Verify_UC = verifyPassword(password, upper_case, msj[1]);

  if(Verify_empty && Verify_size && Verify_LC && Verify_UC && Verify_num){
      return true;
  }
  else{
      return false;
  }
}

module.exports = Verify;
