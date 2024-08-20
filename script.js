let currentInput = '';
let operation = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '') return; // Prevent operation without a number
    firstNumber = currentInput;
    operation = op;
    currentInput += ' ' + op + ' '; // Append the operator to the display
    updateDisplay(currentInput);
}

function calculate() {
    if (currentInput === '' || firstNumber === '') return; // Prevent calculation without numbers
    let result;
    const [num1, , num2] = currentInput.split(' '); // Split to handle the number and operator
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
            case '%':
            result = number1 % number2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    firstNumber = '';
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    firstNumber = '';
    updateDisplay('0');
}

function deleteEntry() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}


function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}
