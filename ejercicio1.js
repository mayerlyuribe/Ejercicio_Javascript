const cantidad_enteros = parseInt(prompt("ingrese la cantidad de enteros que quiere guardar en el array"))

const enteros = [];
let suma = 0;
let mayor = -Infinity;
let menor = Infinity;

for (let i = 0; i < cantidad_enteros; i++) {
    enteros.push(parseInt(prompt(`Ingrese el entero`)));
    suma += enteros[i];

    if (enteros[i] > mayor){
        mayor = enteros[i];
    }else if (enteros[i] < menor){
        menor = enteros[i];
    }
}
console.log(`la media de los enteros es de ${suma/cantidad_enteros}`);
console.log(`el mayor es ${mayor}`);
console.log(`el menor es ${menor}`);

