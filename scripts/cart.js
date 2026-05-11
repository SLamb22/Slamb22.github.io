let cart = [];

// LOAD CART FROM STORE PAGE
function loadCart() {
  let saved = localStorage.getItem("cart");

  if (saved) {
    cart = JSON.parse(saved);
  }

  displayCart();
}

// DISPLAY CART
function displayCart() {
  let container = document.getElementById("cartDisplay");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("totalDisplay").innerText = "";
    return;
  }

  let output = `
    <table border="1">
      <tr>
        <th>Item</th>
        <th>Options</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
  `;

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    output += `
      <tr>
        <td>${item.product}</td>
        <td>${item.size || ""} ${item.color || ""}</td>

        <td>
          <button onclick="changeQty(${index}, -1)">-</button>
          ${item.quantity}
          <button onclick="changeQty(${index}, 1)">+</button>
        </td>

        <td>$${item.price * item.quantity}</td>

        <td>
          <button onclick="removeItem(${index})">Remove</button>
        </td>
      </tr>
    `;
  });

  output += "</table>";

  container.innerHTML = output;

  document.getElementById("totalDisplay").innerText =
    "Total: $" + total;

  saveCart();
}

// CHANGE QUANTITY
function changeQty(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  displayCart();
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

// SAVE BACK TO STORAGE
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// RUN ON LOAD
window.onload = loadCart;