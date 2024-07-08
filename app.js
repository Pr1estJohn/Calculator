var screen = document.getElementById("screen");
var clearResult = false;

function appendNum(nums) {
  if (clearResult) {
    screen.innerHTML = nums;
    clearResult = false;
  } else {
    if (screen.innerHTML === "0") {
      screen.innerHTML = nums;
    } else {
      screen.innerHTML += nums;
    }
  }
}

function appendOperator(operator) {
  var lastChar = screen.innerHTML.slice(-1);
  if (!["/", "*", "-", "+"].includes(lastChar)) {
    screen.innerHTML += operator;
  }
  if (operator === "/") {
    if (lastChar === 0) {
      screen.innerHTML = "error";
    }
  }
}

function appendDot() {
  var lastChar = screen.innerHTML.slice(-1);

  if (lastChar === "." || ["/", "*", "-", "+"].includes(lastChar)) {
    screen.innerHTML += "0.";
  } else if (!lastChar.includes(".")) {
    screen.innerHTML += ".";
  }
}

function clearScr() {
  screen.innerHTML = "0";
  clearResult = false;
}

function backspace() {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
  if (screen.innerHTML === "") {
    screen.innerHTML = "0";
  }
}

function calcResult() {
  try {
    screen.innerText = eval(screen.innerText);
    clearResult = true;
  } catch (e) {
    screen.innerText = "Error";
    clearResult = true;
  }
}
