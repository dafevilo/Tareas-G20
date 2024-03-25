// Crear objetos y array

let products = [
  {
    name: "camisa",
    price: 5,
    amount: 5,
    category: "ropa",
  },
  {
    name: "patalon",
    price: 15,
    amount: 10,
    category: "ropa",
  },
  {
    name: "zapatos",
    price: 15,
    amount: 10,
    category: "ropa",
  },
  {
    name: "medias",
    price: 20,
    amount: 10,
    category: "ropa",
  },
];

let total = 0;
for (let i = 0; i < products.length; i++) {
  let sumOfProducts = products[i];
  total = total + sumOfProducts.price + sumOfProducts.amount;
}
if (total === 100) {
  console.log("Feliciades");
  console.log("El total de precio y cantidad es de:" + total + " USD");
} else {
  console.log("Agrega más productos para calificar para envío gratuito");
  console.log("Tienes : " + total + " USD" + " te falta poco para completar tu compra");
}


