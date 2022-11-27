"use strict";

const slide = document.querySelector(".slide");
const pBasic = document.querySelector(".price-basic");
const pProf = document.querySelector(".price-prof");
const pMaster = document.querySelector(".price-master");

function monthlyPlan() {
  pBasic.textContent = "19.99";
  pProf.textContent = "24.99";
  pMaster.textContent = "39.99";
}

function annualPlan() {
  pBasic.textContent = "199.99";
  pProf.textContent = "249.99";
  pMaster.textContent = "399.99";
}

slide.addEventListener("click", () => {
  if (slide.checked) {
    monthlyPlan();
  } else {
    annualPlan();
  }
});
