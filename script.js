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

    // Case 1: Handle expressions like "200+10%" or "200-10%"
    expression = expression.replace(/(\d+(?:\.\d+)?)([+\-])(\d+)%/g,
      function(match, num1, operator, num2) {
        return num1 + operator + "(" + num1 + "*" + num2 + "/100)";
      }
    );

    // Case 2: Handle "200*10%" or "200/10%"
    expression = expression.replace(/(\d+(?:\.\d+)?)([*\/])(\d+)%/g,
      function(match, num1, operator, num2) {
        return num1 + operator + "(" + num2 + "/100)";
      }
    );

    // Case 3: Handle single percentages like "50%"
    expression = expression.replace(/(\d+)%/g, "($1/100)");

    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}
