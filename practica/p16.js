//Hallar intersección de 2 arrays

var array1 = [1, 2, 3, 2, 5, 6, 3]
var array2 = [4, 6, 8, 9, 3]

function contains(e, a) {

    for (var i = 0; i < a.length; ++i) {

        if (a[i] == e) {

            return true

        }
    }

    return false

}

function hallarInterseccion(a1, a2) {

    var interseccion = []

    for (var i = 0; i < a1.length; ++i) {

        for (var j = 0; j < a2.length; ++j) {

            if (a1[i] == a2[j] && !contains(a1[i], interseccion)) {

                interseccion.push(a2[j])
            }
        }
    }

    return interseccion

}


var inter = hallarInterseccion(array1, array2)
console.log(inter)

