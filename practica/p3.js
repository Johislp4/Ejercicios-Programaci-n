//Comparar peso de 2 arrays utilizando funciones
var array1 = [
    1,6,8,5,6,39,6
]

var array2 = [
    1,6,8,5,7,9,10
]

function pesoArray (a) {

    var suma = 0
    for (i = 0; i < a.length; ++i) {

        suma = suma + a[i]
    }

    return (suma)



}

var p1 = pesoArray(array1)
var p2 = pesoArray(array2)

if (p1 > p2) {
    console.log(1)
} else if (p2 > p1) {
    console.log(2)
} else  if (p1 === p2) {
    console.log(0)
}





