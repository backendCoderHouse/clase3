function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function operacion(a, b, callback) {
  return callback(a, b);
}

const resultado = operacion(2, 3, multiplicar);

console.log(resultado); // Salida: 

