//Hallar factorial de un número

function factorialNumero(numero) {

    fact = 1

    for (var i = 1; i <= numero; ++i ) {
        fact = fact * i

    }

    return fact
}

var rta = factorialNumero(6)

console.log(rta)