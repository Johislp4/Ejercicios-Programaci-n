//cortar un array

var a = [1,2,3,4,5,6,7,8,9,10,11]

function cortarArray(array, p, l) {

    var array2 = []
    for (var i = p; i < p+l; ++i) {

        array2.push(array[i])
    }

    return array2
}

var rta = cortarArray(a, 3, 4)
console.log(rta)