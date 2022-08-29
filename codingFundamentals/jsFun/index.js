// ? what is a callback function ?

function a() {
  // ! require some data deom function b
  let bData;
  // !this getBData is a callback function
  function getBData(data) {
    bData = data;
  }

  b(getBData);
  return bData;
}

function b(callbackFunc) {
  // * this function is running independently
  let bSpecificData = { name: "Akshay" };
  callbackFunc(bSpecificData);
}

console.log(a());
