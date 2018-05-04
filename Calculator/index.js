'use strict';

let displayNum = '';
let storedNum = 0;
let operation = 0;
let addingMore = true;

function clearDisplay() {
  let display = document.getElementById('display');

  displayNum = '';
  storedNum = 0;
  operation = 0;
  display.value = displayNum;

}

function numInput(num) {
  let display = document.getElementById('display');

  if (addingMore === true && display.value !== '.') {
    display.value = '';
  }

  if ((display.value === '') && num === '0') {
    return;
  } else {
    display.value += num;
    addingMore = false;
  }
}

function insertDecimal(dec) {
  let display = document.getElementById('display');

  for (let i = 0; i < display.value.length; i++)
    if (display.value.charAt(i) === '.') {
      return;
    }
  display.value += dec;
}

function setOperation(command) {
  let display = document.getElementById('display'),
    displayNum = display.value;
  let evalDisplay = eval(displayNum);
  addingMore = true;

  if (storedNum !== 0 && operation !== 0) {
    calculate()
    operation = command;
  } else {
    storedNum = evalDisplay;
    operation = command;
    display.value = '';
  }

}

function calculate() {
  let display = document.getElementById('display');
  displayNum = display.value;
  let evalDisplay = eval(displayNum);
  let evalStored = eval(storedNum);

  if (operation === '1') {
    displayNum = evalStored + evalDisplay;
    display.value = displayNum;
  }
  else if (operation === '2') {
    displayNum = evalStored - evalDisplay;
    display.value = displayNum;
  }
  else if (operation === '3') {
    displayNum = evalStored * evalDisplay;
    display.value = displayNum;
  }
  else if (operation === '4') {
    displayNum = evalStored / evalDisplay;
    display.value = displayNum;
  }

  operation = 0;
  storedNum = displayNum;
}
