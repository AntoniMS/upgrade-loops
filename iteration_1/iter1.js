/* #1. Haz un bucle y muestra por consola todos aquellos valores del array que incluyan
 la palabra "Camiseta". Usa la función .***includes*** de javascript. */

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
  const tShirt = products[i].includes("Camiseta");
  if (tShirt == true) {
    console.log(products[i]);
  }
}
