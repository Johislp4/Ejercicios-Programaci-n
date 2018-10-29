//Hallar si un array contiene un número entero dado
function contains(a, e) {


    for (var i = 0; i < a.length; ++i) {

        if (a[i] == e) {

            return true

        }
    }

    return false

}

var array = [1, 2, 3, 4, 5, 3]

var rta = contains(array, 3)

console.log(rta)