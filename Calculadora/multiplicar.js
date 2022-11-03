const  multiplicar = function (a, b){
    if (a === 0 || b === 0){
        return (a * b) + " <- Siempre que multipliques por CERO dara CERO"
    } else {
        return ("El resultado de Multiplicar " + a + " por " + b + " es " + (a * b))
    }
}

module.exports = multiplicar