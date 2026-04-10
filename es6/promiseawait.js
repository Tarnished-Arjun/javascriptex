const products = [
  { id: 1, name: 'Laptop', price: 27000 },
  { id: 2, name: 'Smart Phone', price: 15000 },
  { id: 3, name: 'Tablet', price: 30000 }
];

function getTotalPrice(products) {
  return new Promise((resolve, reject) => {
    if (products.length === 0) {
      reject("No product found");
    } else {
      let total = products.reduce((sum, p) => sum + p.price, 0);
      resolve({ totalPrice: total });
    }
  });
}
async function main() {
  try {
    let result = await getTotalPrice(products);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();