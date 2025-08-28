let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = display.value;

    // Handle percentages
    expression = expression.replace(/(\d+(?:\.\d+)?)([\+\-\*\/])(\d+)%/g,
      function(match, num1, operator, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (operator === "+" || operator === "-") {
          return num1 + operator + (num1 * num2 / 100);
        } else if (operator === "*") {
          return num1 * (num2 / 100);
        } else if (operator === "/") {
          return num1 / (num2 / 100);
        }
      }
    );

    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}
