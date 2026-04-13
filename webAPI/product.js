
function addToCart() {
  let product = document.getElementById("products").value;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];


  cart.push(product);


  localStorage.setItem("cart", JSON.stringify(cart));


  displayCart();
}


function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let list = document.getElementById("cart");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

window.onload = function () {
  displayCart();
};