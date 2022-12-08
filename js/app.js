"use strict";

const input = document.querySelectorAll("input");
const prices = document.querySelectorAll("span");

// PRICES
function price(arr) {
  for (let i = 0; i < arr.length; i++) {
    prices[i].textContent = arr[i];
  }
}

function plan() {
  // PLAN
  const arrAnnual = [199.99, 249.99, 399.99];
  const arrMonthly = [19.99, 24.99, 39.99];

  for (const el of input) {
    if (el.checked) {
      price(arrMonthly);
    } else {
      price(arrAnnual);
    }
  }
}

for (const el of input) {
  el.addEventListener("click", () => {
    plan();
  });
}
