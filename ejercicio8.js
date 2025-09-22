const array_inicial = [1, 2, 3, 4, 5]; 
const array_modificado =[];
let e = array_inicial.length - 1;

for (let i = 0; i < array_inicial.length; i++){
    array_modificado.push(array_inicial[e - i]);
}
console.log(`el array original es: ${array_inicial}`);
console.log(`el array modificado es: ${array_modificado}`);