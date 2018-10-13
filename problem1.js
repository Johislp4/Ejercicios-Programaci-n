//En los múltiplos de 3, la suma de los valores de sus cifras es también múltiplo de 3.
//Los múltiplos de 5 terminan en 0, o en 5.


function multiplo(valor, multiplo)
{
    resto = valor % multiplo
    if(resto==0){
        return true
    } else {
        return false
    }

}

var multiplos_3=[]
var multiplos_5=[]

suma = 0

for(var i=1;i<1000;i++)
{
    if(multiplo(i,3)){
        multiplos_3.push(i)

    }

    var suma_5 = 0
    if(multiplo(i,5)) {
        multiplos_5.push(i)

    }

}


console.log(multiplos_3)




