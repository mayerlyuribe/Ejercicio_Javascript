//listas

const datos = [ 12,  3,  4, "Mariana", "Manzana", true ];

datos[4]="Banano"
console.log(datos[3]);
const x = datos[5];

console.log(datos.length);
//array methods
//pop push

datos.push(33);
console.log(datos);
console.log(datos.length);

console.log(datos);

// for (let i=0 ;  i<  datos.length  ; i++ ){
//     console.log(`En la posicion ${i} esta ${datos[i]}`);
// }

// let i=0
// while (true) {
//     if(i>=datos.length) break
//     console.log(`En la posicion ${i} esta ${datos[i]}`);
//     i++
// }

datos.forEach( (dato,index) => console.log(`En la posicion ${index} esta ${dato}`))