const array_notas = [];
const array_names = [];
const array_palabras =["suspenso", "bien", "notable", "sobresaliente"];


for (let i = 1; i<= 10; i++){

    let name = prompt("ingrese el nombre del estudiante " + i);
    array_names.push(name);

    let nota = parseFloat(prompt("ingrese la nota " + i));
    if (nota >= 0 && nota <= 10){
        array_notas.push(nota);
    }
    else{
        console.log("la nota ingresada no es valida");
        i--;
        continue;
    }

    if (nota >= 0 && nota <= 4.99){
        console.log(`la calificación del estudiante ${name}, con una nota de: ${nota}, es ${array_palabras[0]}`);
    }else if(nota >= 5 && nota <= 6.99){
        console.log(`la calificación del estudiante ${name}, con una nota de: ${nota}, es ${array_palabras[1]}`);
    }else if (nota >= 7 && nota <= 8.99){
        console.log(`la calificación del estudiante ${name}, con una nota de: ${nota}, es ${array_palabras[2]} `);
    }else if (nota >= 9 && nota <= 10){
        console.log(`la calificación del estudiante ${name}, con una nota de: ${nota}, es ${array_palabras[3]}`);
    }
}
