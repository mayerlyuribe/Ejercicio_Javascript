const array_alturas = [];
const mayor_promedio =[];
const menor_promedio =[];

let suma_alturas = 0;

while (true){
    let altura = parseFloat(prompt("ingrese la altura en cm (ingrese 0 para terminar)"))
    if (altura <= 0) break;

    array_alturas.push(altura);
    suma_alturas += altura;
}

let media_alturas = suma_alturas / array_alturas.length;
console.log(`la media de las alturas es de: ${media_alturas} cm`);

for (let i = 0; i < array_alturas.length; i++){

    if (array_alturas[i] > media_alturas){
        mayor_promedio.push(array_alturas[i]);
    } else {
        menor_promedio.push(array_alturas[i]);
    }
}
console.log(`la cantidade de personas con una altura mayor al promedio es de: ${mayor_promedio.length}`);
console.log(`la cantidad de personas con una altura menor al promedio es de: ${menor_promedio.length}`);
