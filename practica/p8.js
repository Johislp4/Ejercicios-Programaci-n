//concatenar 2 arrays

var array1 = [1,2,3,4,5]
var array2 = [6,7,8,9,10,11]

function concatenar(a1, a2) {

    for (var i = 0; i < a2.length; ++i ) {

        a1.push(a2[i])
    }

    return a1

}

var rta = concatenar(array1, array2)
console.log(rta)

