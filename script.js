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

    // Handle percentages like "1000-70%" => "1000-(70/100*1000)"
    expression = expression.replace(/(\d+(?:\.\d+)?)([\+\-\*\/])(\d+)%/g,
      function(match, num1, operator, num2) {
        return num1 + operator + "(" + num2 + "/100*" + num1 + ")";
      }
    );

    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}
