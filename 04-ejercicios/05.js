/**
 * Crear algoritmo que devuelva numero menor y numero mayor de un array
 */


let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (let numeros of arr) {
        menor = menor < numeros ? menor : numeros;
        mayor = mayor > numeros ? mayor : numeros;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
