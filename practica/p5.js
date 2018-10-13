//multiplicar 2 arrays
var array1 = [
    1,6,8,5,6,39,6
]

var array2 = [
    1,6,8,5,7,9,
]



function multiplicarArrays(a1, a2) {

   if (a1.length === a2.length) {

       var arrayRta = []

       for (var i = 0; i < a1.length; ++i) {

           var resultado = a1[i] * a2 [i]

           arrayRta.push(resultado)


       }

       return arrayRta
   } else {
       return -1
   }

}

var holi = multiplicarArrays(array1, array2)

console.log(holi)