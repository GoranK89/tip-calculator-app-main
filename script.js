'use strict';

// bill ammount
const billAmmount = document.getElementById('bill');

// tip percentage buttons
const tipButtons = document.querySelectorAll('.btn-tip');
const customValue = document.querySelector('.custom-tip');
// number of people
const peopleNum = document.getElementById('num-people');
const hiddenLabel = document.querySelector('.label-h');

// output containers
const tipAmmountPerson = document.querySelector('.tip-result');
const totalBill = document.querySelector('.tip-result-total');

// reset button
const resetBtn = document.querySelector('.btn-reset');

// for each button clicked calculate the bill
tipButtons.forEach(btn =>
  btn.addEventListener('click', function (e) {
    const clicked = e.target.value.slice(0, -1); // remove the % symbol
    // If number of people is less than 1, no calculations will be done
    if (peopleNum.value < 1) {
      hiddenLabel.classList.remove('hidden');
    } else if (peopleNum.value > 0) {
      hiddenLabel.classList.add('hidden');

      // calculations
      const billPerPerson = billAmmount.value / peopleNum.value;
      const tipPerPerson = (billPerPerson / 100) * clicked;
      const totalToPay = billPerPerson + tipPerPerson;

      tipAmmountPerson.textContent = '$' + tipPerPerson.toFixed(2);
      totalBill.textContent = '$' + totalToPay.toFixed(2);
    }
  })
);

// Custom tip %
let customTip = 0;
customValue.addEventListener('keyup', function () {
  if (peopleNum.value < 1) {
    hiddenLabel.classList.remove('hidden');
  } else if (peopleNum.value > 0) {
    hiddenLabel.classList.add('hidden');

    customTip = customValue.value;
    const billPerPerson = billAmmount.value / peopleNum.value;
    const tipPerPersonCustom = (billPerPerson / 100) * customTip;
    const totalToPayCustom = billPerPerson + tipPerPersonCustom;
    tipAmmountPerson.textContent = '$' + tipPerPersonCustom.toFixed(2);
    totalBill.textContent = '$' + totalToPayCustom.toFixed(2);
  }
});

resetBtn.addEventListener('click', () => {
  billAmmount.value = '';
  peopleNum.value = '';
  customValue.value = '';
  tipAmmountPerson.textContent = '$0';
  totalBill.textContent = '$0';
  hiddenLabel.classList.add('hidden');
});
