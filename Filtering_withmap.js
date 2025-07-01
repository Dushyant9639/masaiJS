function processProducts(products) {
  const productNames = products.map(product => product.name);
  products.forEach(product => {
    const message = product.price > 50
      ? `${product.name} is above $50`
      : `${product.name} is below $50`;
    console.log(message);
  });
  return productNames;
}
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];
processProducts(products);

