//ARRAY NUMERO 1
const numeros = [1, 2, 3, 4, 5];

//METODO PUSH
numeros.push(6);

console.log(numeros);

//METODO POP
const ultimoNumero = numeros.pop();

console.log(numeros);
console.log(ultimoNumero);


//ARRAY #2
const frutas = ['manzana', 'banana', 'naranja', 'fresa'];

//METODO PUSH
frutas.push('pera', 'piña', 'guanabana');

console.log(frutas);

//METODO POP
const ultimafruta = frutas.pop();

console.log(ultimafruta);
console.log(frutas);


//ARRAY #3
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 22 }
];

//METODO POP
UPersonas = personas.pop();

console.log(UPersonas);
console.log(personas);


//METODO PUSH
personas.push(
    {nombre: 'Simon', edad: 21},
    {nombre: 'patricia', edad: 25}
);

console.log(personas);


//ARRAY #4
const fechas = [
    new Date(2023, 0, 1), 
    new Date(2023, 6, 4), 
    new Date(2024, 11, 25) 
];

//METODO POP

ultimaFecha = fechas.pop();

console.log(ultimaFecha);
console.log(fechas);

//METODO PUSH

fechas.push(
    new Date(2001, 11, 9),
    new Date(2003, 9, 8)
)

console.log(fechas);


//ARRAY #5
const letras = ['a', 'b', 'c', 'd', 'e'];

//METODO PUSH
letras.push('f', 'g', 'h', 'i', 'j', 'k', 'l', 'm');

console.log(letras);

//METODO POP

Uletra = letras.pop();

console.log(Uletras);

console.log(letras);


