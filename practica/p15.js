//Hallar promedio

var array = [2,4,6,8]

function hallarPromedio(a) {

    if (a.length == 0) {
        return false
    }

    suma = 0

    for (i = 0; i < a.length; ++i) {

        suma = suma + a[i]

    }

    return suma / a.length

}

var rta = hallarPromedio(array)
console.log(rta)