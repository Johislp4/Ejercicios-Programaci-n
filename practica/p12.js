//Hallar Media

array = [0,30,15,5,54,10]

function hallarMedia(a) {

    if (a.length == 0) {

        return false
    }

    var par = a.length % 2
    n1 = (a.length / 2) - 1
    n2 = n1 + 1

    if (par == 0) {

        return (a[n1] + a[n2]) / 2

    } else {

        return a[Math.ceil(n1)]
    }
}


var rta = hallarMedia(array)

console.log(rta)
