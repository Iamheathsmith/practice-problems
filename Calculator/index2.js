'use strict';

let displayNum = '';
let storedNum = 0;
let operation = 0;

$(document).ready(function() {

  $('.button').click((e) => {
    e.preventDefault();
    let imput = $(e.target).html();

    if (storedNum !== 0 && isNaN(imput) && imput !== '.') {
      doMath(storedNum, displayNum, operation)
    }

    switch (imput) {
    case '+':
      storedNum = displayNum;
      operation = imput;
      resetScreen();
      break;
    case '-':
      storedNum = displayNum;
      operation = imput;
      resetScreen();
      break;
    case '*':
      storedNum = displayNum;
      operation = imput;
      resetScreen();
      break;
    case '/':
      storedNum = displayNum;
      operation = imput;
      resetScreen();
      break;
    case '=':
      storedNum = 0;
      break;
    case 'C':
      storedNum = 0;
      displayNum = ''
      resetScreen();
      break;
    case '.':
      decimal(imput);
      $('#display').val(displayNum);
      break;
    default:
      updateScreen(imput);
    }
  });

  let updateScreen = function(imput) {
    if (displayNum === storedNum) {
      displayNum = '';
    }
    displayNum += imput.toString();
    $('#display').val(displayNum);
  };

  let resetScreen = function() {
    if (operation !== 0) {
      $('#display').val(storedNum)
    } else {
      displayNum = '';
      $('#display').val('')
    }
  }

  let decimal = function(dec) {
    for (let i = 0; i < displayNum.length; i++)
      if (displayNum.charAt(i) === '.') {
        return;
      }
    displayNum += dec.toString();
  }

  let doMath = function(old, newish, operation) {
    let disNum = eval(newish);
    let stdNum = eval(old);

    if (operation === '+') {
      displayNum = stdNum + disNum;
      $('#display').val(displayNum);
    }
    else if (operation === '-') {
      displayNum = stdNum - disNum;
      $('#display').val(displayNum);
    }
    else if (operation === '*') {
      displayNum = stdNum * disNum;
      $('#display').val(displayNum);
    }
    else if (operation === '/') {
      displayNum = stdNum / disNum;
      $('#display').val(displayNum);
    }
  }

});
