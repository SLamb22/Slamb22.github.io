document.addEventListener("DOMContentLoaded", function () {

  const orderData = JSON.parse(localStorage.getItem("orderData"));
  const confirmationDiv = document.getElementById("confirmationContent");

  if (!confirmationDiv) {
    console.log("Missing confirmationContent div");
    return;
  }

 

  let output = "";

  // BILLING
  output += `
    <h3>Billing Information</h3>
    <p>
      <strong>Name:</strong> ${orderData.billing.name}<br>
      <strong>Email:</strong> ${orderData.billing.email}<br>
      <strong>Phone:</strong> ${orderData.billing.phone}
    </p>
  `;

  // SHIPPING
  output += `
    <h3>Shipping Information</h3>
    <p>
      <strong>Name:</strong> ${orderData.shipping.shipName}<br>
      <strong>Email:</strong> ${orderData.shipping.shipEmail}<br>
      <strong>Phone:</strong> ${orderData.shipping.shipPhone}
    </p>
  `;

  // ITEMS
  output += `
    <h3>Order Summary</h3>
    <table border="1">
      <tr>
        <th>Item</th>
        <th>Options</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
  `;

  let grandTotal = 0;

  orderData.cart.forEach(item => {
    let itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    output += `
      <tr>
        <td>${item.product}</td>
        <td>${item.size} ${item.color}</td>
        <td>${item.quantity}</td>
        <td>$${itemTotal}</td>
      </tr>
    `;
  });

  output += `
    </table>
    <h3>Grand Total: $${grandTotal}</h3>
  `;

  confirmationDiv.innerHTML = output;

  localStorage.removeItem("cart");
});