function addToCart() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("1. Item added to cart");
      resolve();
    }, 1000);
  });
}

function fastShipping() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("2. Fast shipping selected");
      resolve();
    }, 1000);
  });
}

function validateCart() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("3. Cart validated successfully");
      resolve();
    }, 1000);
  });
}

function makePayment() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("4. Payment successful");
      resolve();
    }, 1000);
  });
}

async function shop() {
  await addToCart();
  await fastShipping();
  await validateCart();
  await makePayment();
}

shop();