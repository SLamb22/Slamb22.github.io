

function calculateTotal_S() {

   const dailyRate_S = 100;     // cost per day for Single Bedroom
    const entryCost = 75;      // per person
    const cleaningCost = 100;   // optional
    const tvCost = 150;         // optional

  let days = parseInt(document.getElementById("days").value) || 0;
  let people = parseInt(document.getElementById("people").value) || 0;

  let total = (dailyRate_S * days) + (entryCost * people);

  if (document.getElementById("cleaning").checked) {
    total += cleaningCost;
  }

  if (document.getElementById("tv").checked) {
    total += tvCost;
  }

  document.getElementById("result").innerText =
    "Estimated Total: $" + total;
}

// Run once when page loads
window.onload = calculateTotal;

function calculateTotal_F() {

   const dailyRate_F = 150;     // cost per day for Family Bedroom
    const entryCost = 75;      // per person
    const cleaningCost = 100;   // optional
    const tvCost = 150;         // optional

  let days = parseInt(document.getElementById("days").value) || 0;
  let people = parseInt(document.getElementById("people").value) || 0;

  let total = (dailyRate_F * days) + (entryCost * people);

  if (document.getElementById("cleaning").checked) {
    total += cleaningCost;
  }

  if (document.getElementById("tv").checked) {
    total += tvCost;
  }

  document.getElementById("result").innerText =
    "Estimated Total: $" + total;
}

// Run once when page loads
window.onload = calculateTotal;