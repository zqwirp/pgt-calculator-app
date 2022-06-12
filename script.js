let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const calculatorScreen = document.querySelector(".calculator-screen");
function updateScreen(number) {
  calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");
for (let number of numbers) {
  number.addEventListener("click", event => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
}

const operators = document.querySelectorAll(".operator");
for (let operator of operators) {
  operator.addEventListener("click", event => {
    inputOperator(event.target.value);
  });
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", event => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
  toPercentage();
  updateScreen(currentNumber);
});

function inputNumber(number) {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

function inputOperator(operator) {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
}

function calculate() {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  console.log(currentNumber.length);
  calculationOperator = "";
}

function clearAll() {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
}

function inputDecimal(dot) {
  if (currentNumber.includes(".")) return;
  currentNumber += dot;
}

function toPercentage() {
  if (currentNumber === "0") return;

  let result = "";
  result = parseFloat(parseInt(currentNumber) / 100);
  currentNumber = result;
}

document.addEventListener("DOMContentLoaded", event => {
  clearAll();
  updateScreen(currentNumber);
});
