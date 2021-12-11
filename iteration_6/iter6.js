/*#6 Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
usar la función .includes() para comprobarlo.*/
const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (const toy of toys) {
    if (toy.name.includes('gato')) {
        toys.splice(toys.indexOf(toy));
    }
}

console.log(toys);
