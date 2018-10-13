//Potencia de un número


function potenciaNumero(b, e) {

     if (e === 0) {

         return 1

     }else if (e === 1) {

         return b
     }

     pow = 1

     for (i = 1; i <= e; ++i) {

         pow *= b
     }

     return pow

}

var rta = potenciaNumero(2, 3)
console.log(rta)