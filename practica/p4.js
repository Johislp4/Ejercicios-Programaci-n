//multiplicar array por un número
var array1 = [
    1,6,8,5,6,10,6
]




function multiplicarArray(array, numero) {

    for (var i = 0; i < array.length; ++i) {
        array[i] *= numero
    }

    console.log(array)
}

multiplicarArray(array1, 2)