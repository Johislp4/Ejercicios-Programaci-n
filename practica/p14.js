// Hallar mínimo

var array = [1,30,15,5,54,10]

function hallarMinimo(a) {


    if (a.length == 0) {

        return false
    }

    var max = a[0]

    for (i = 1; i < a.length; ++i) {

        if (a[i] <= max) {
            max = a[i]
        }
    }

    return max
}

var rta = hallarMinimo(array)
console.log(rta)