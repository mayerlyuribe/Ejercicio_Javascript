const array = [];
const array_positivos = [];
const array_negativos = [];

let suma_positivos = 0;
let suma_negativos = 0;

for (let i = 1; i <= 10; i++){
    let numero = parseInt(prompt("ingrese un número entero: "));
    array.push(numero);

    if (numero >= 0){
        array_positivos.push(numero);
        suma_positivos += numero;

    }else{
        array_negativos.push(numero);
        suma_negativos += numero;
    }
}
console.log(array);

media_posi = suma_positivos / array_positivos.length;
media_nega = suma_negativos / array_negativos.length;

console.log(`la media de los números positivos es de: ${media_posi}`);
console.log(`la media de los números negativos es de: ${media_nega}`);



