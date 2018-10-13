//Identificar si existe al menos un número par en un array
var array = [1,2,15,9,13,5]

function numeroPar(a) {
    for (var i=0; i < a.length; ++i) {

        var par = a[i] % 2

        if (par == 0) {
        return true
        }

    }

    return false

}

var rta = numeroPar(array)

console.log(rta)