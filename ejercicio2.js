const enteros = [];
mayor = -Infinity;
menor = Infinity;
let numero;
let suma = 0;

while(true){

    numero = parseInt(prompt("ingrese un entero positivo (ingrese cero para terminar)"));
    if (numero <= 0 ) break;
    enteros.push(numero);

    suma += numero;
    if (numero > mayor){
        mayor = numero;

    }else if (numero < menor){
        menor = numero;
    }
}

console.log(enteros);
console.log("la suma de los enteros es de: " + suma);
console.log("el nunero mayor en la lista es: " + mayor);
console.log("el numero menor en la lista es: " + menor);