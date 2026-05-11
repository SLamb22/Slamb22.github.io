let cart = JSON.parse(localStorage.getItem("cart")) || [];
displayCart();

// ADD TO CART
function addToCart(product, price, idNum = null) {
  let size = "";
  let color = "";

  if (idNum) {
    size = document.getElementById("size-" + idNum)?.value || "";
    color = document.getElementById("color-" + idNum)?.value || "";
  }

  let existing = cart.find(item =>
    item.product === product &&
    item.size === size &&
    item.color === color
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ product, price, size, color, quantity: 1 });
  }

  // ✅ IMPROVED MESSAGE
  let message = product + " added to cart";

  if (size || color) {
    message += ` (${size} ${color})`;
  }

  let msgBox = document.getElementById("cartMessage");

  if (msgBox) {
    msgBox.innerText = message + "!";
    msgBox.style.display = "block";

    setTimeout(() => {
      msgBox.style.display = "none";
    }, 3000);
}
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// DISPLAY CART
function displayCart() {
  if (cart.length === 0) {
    document.getElementById("cartDisplay").innerHTML =
      "<p>Your cart is empty.</p>";
    return;
  }

  let output = "<table border='1'><tr><th>Item</th><th>Options</th><th>Qty</th><th>Total</th><th>Action</th></tr>";
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
        <td><button onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
  });

  output += "</table>";
  output += `<p><strong>Total: $${total}</strong></p>`;

  document.getElementById("cartDisplay").innerHTML = output;
}

// CHANGE QTY
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

// COPY BILLING → SHIPPING
function copyInfo() {
  document.getElementById("shipName").value =
    document.getElementById("name").value;

  document.getElementById("shipEmail").value =
    document.getElementById("email").value;

  document.getElementById("shipPhone").value =
    document.getElementById("phone").value;
}

// VALIDATION
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();

  let shipName = document.getElementById("shipName").value.trim();
  let shipEmail = document.getElementById("shipEmail").value.trim();
  let shipPhone = document.getElementById("shipPhone").value.trim();

  let error = document.getElementById("errorMessage");
  error.innerHTML = "";

  if (name === "") {
    error.innerHTML = "Enter your name.";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    error.innerHTML = "Enter a valid email.";
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    error.innerHTML = "Enter a 10-digit phone number.";
    return false;
  }

  if (cart.length === 0) {
    error.innerHTML = "Your cart is empty.";
    return false;
  }

// SAVE ORDER DATA
const orderData = {
  cart: cart,
  billing: { name, email, phone },
  shipping: { shipName, shipEmail, shipPhone }
};

localStorage.setItem("orderData", JSON.stringify(orderData));

// DEBUG (remove later)
console.log("Saved order:", orderData);

// REDIRECT (slight delay ensures storage completes)
setTimeout(() => {
  window.location.href = "storeConfirmation.html";
}, 100);

return false;
}