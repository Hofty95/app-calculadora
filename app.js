const calculadora = require("./calculadora");

const process = require("process");
const operacion = process.argv[2];
const variableA = +process.argv[3];
const variableB = +process.argv[4];

let resultado;


if (operacion === "sumar"){
    resultado = calculadora.sumar(variableA,variableB)
}else if (operacion === "restar"){
    resultado = calculadora.restar(variableA,variableB)
}else if (operacion === "dividir"){
    resultado = calculadora.dividir(variableA,variableB)
}else if (operacion === "multiplicar"){
    resultado = calculadora.multiplicar(variableA,variableB)
}else {
    resultado = "ERROR: ¡Operacion o Variable Invalida!"
}

console.log(resultado);
