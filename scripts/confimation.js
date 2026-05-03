window.onload = function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let customer = JSON.parse(localStorage.getItem("customer")) || {};

  let output = "<ul>";
  let total = 0;

  for (let item of cart) {
    output += `<li>${item.product} - $${item.price}</li>`;
    total += item.price;
  }

  output += "</ul>";
  output += "<p><strong>Total: $" + total + "</strong></p>";

  document.getElementById("orderSummary").innerHTML = output;

  document.getElementById("customerInfo").innerHTML =
    `<p>Name: ${customer.name}</p>
     <p>Email: ${customer.email}</p>
     <p>Phone: ${customer.phone}</p>`;
};