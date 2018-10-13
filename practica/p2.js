//Comparar peso de 2 arrays
var array1 = [
    1,6,8,5,6,39,6
]

var array2 = [
    1,6,8,5,7,9,10
]

var suma1 = 0


for (i=0; i < array1.length; ++i){

    suma1 = suma1 + array1[i]



}

var suma2 = 0

for (i=0; i < array2.length; ++i){

    suma2 = suma2 + array2[i]



}

if (suma1>suma2) {
    console.log('1')

}else if (suma2>suma1) {
    console.log('2')

}else if (suma1===suma2) {
    console.log('0')

}


