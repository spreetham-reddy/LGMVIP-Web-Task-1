let result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  try {
    let expression = result.value;

    // Calculate square
    expression = expression.replace(/(\d+)\^2/g, function(match, num) {
      return Math.pow(Number(num), 2);
    });

    // Calculate cube
    expression = expression.replace(/(\d+)\^3/g, function(match, num) {
      return Math.pow(Number(num), 3);
    });

    // Calculate square root
    expression = expression.replace(/√(\d+)/g, function(match, num) {
      return Math.sqrt(Number(num));
    });

    // Calculate cube root
    expression = expression.replace(/∛(\d+)/g, function(match, num) {
      return Math.cbrt(Number(num));
    });

    result.value = eval(expression);
  } catch (error) {
    result.value = "Error";
  }
}
function backspace() {
    result.value = result.value.slice(0, -1);
}