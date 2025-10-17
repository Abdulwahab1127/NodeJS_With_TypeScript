function addNumbers() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var resultDisplay = document.getElementById('result');
    var n1 = parseFloat(num1Input.value);
    var n2 = parseFloat(num2Input.value);
    if (isNaN(n1) || isNaN(n2)) {
        resultDisplay.textContent = "Please enter valid numbers!";
        return;
    }
    var sum = n1 + n2;
    resultDisplay.textContent = "Result: ".concat(sum);
}
// Add event listener safely after DOM loads
var addButton = document.getElementById('addBtn');
addButton.addEventListener('click', addNumbers);
