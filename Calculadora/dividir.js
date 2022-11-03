const dividir = function (a, b){
    if (a === 0 || b === 0){
        return "ERROR: ¡No se puede dividir por CERO!"
    }else {
        return ("El resultado de Dividir " + a + " por " + b + " es " + (a / b))
    }
}

module.exports = dividir