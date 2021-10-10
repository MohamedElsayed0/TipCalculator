let bill = document.getElementById("bill");
let custom = document.getElementById("custom");
let people = document.getElementById("people");
let tipA = document.getElementById("tipA");
let totalA = document.getElementById("totalA");
let nums = document.querySelectorAll(".num");
let error = document.getElementById("can-t");
let reset = document.getElementById("reset");

let billVal, tipval, peopleVal;

bill.addEventListener("input", (e) => {
  if (bill.value > 0) billVal = parseFloat(e.target.value);

  calcTip();
});

people.addEventListener("input", (e) => {
  peopleVal = parseFloat(people.value);
  if (peopleVal <= 0) {
    error.classList.add("error");
  } else {
    error.classList.remove("error");
  }
  calcTip();
});

nums.forEach((item) => {
  item.addEventListener("click", (event) => {
    nums.forEach((item) => {
      item.classList.remove("active");
    });
    if (item.innerHTML == event.target.innerHTML) {
      item.classList.add("active");
      tipval = parseFloat(item.innerHTML) / 100;
    }
    custom.value = "";
    calcTip();
  });
});

custom.addEventListener("input", () => {
  if (custom.value > 0) {
    tipval = parseFloat(custom.value / 100);

    nums.forEach((item) => {
      item.classList.remove("active");
    });
  } else {
    custom.style.border = "1px solid red";
  }
  if (tipval !== "") {
    calcTip();
  }
});

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  custom.value = "";
  nums.forEach((item) => item.classList.remove("active"));
  tipA.innerHTML = "$0.00";
  totalA.innerHTML = "$0.00";
});
function calcTip() {
  if (peopleVal >= 1) {
    let amount = (billVal * tipval) / peopleVal;
    let total = (billVal * (tipval + 1)) / peopleVal;
    tipA.innerHTML = `$${amount.toFixed(2)}`;
    totalA.innerHTML = `$${total.toFixed(2)}`;
  }
}
