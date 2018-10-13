//suma de números impares en un array
var array = [1,2,1,4,15,9,13,5]

 function sumaImpares(a) {

    cont = 0
    for (var i=0; i < a.length; ++i ) {
        
        var impar = a[i] % 2
        
        if (impar != 0) {

            cont = cont + a[i]
        }

    }

    return cont

 }

 var rta = sumaImpares(array)

console.log(rta)

