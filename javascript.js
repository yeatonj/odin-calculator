function add(op1, op2) {
    return op1 + op2;
}

function subtract (op1, op2) {
    return op1 - op2;
}

function multiply(op1, op2) {
    return op1 * op2;
}

function divide(op1, op2) {
    return op1 / op2;
}

function operate(op1, op2, operator){
    switch (operator) {
        case '+':
            return add(op1, op2);
        case '-':
            return subtract(op1, op2);
        case '*':
            return multiply(op1, op2);
        case '/':
            return divide(op1, op2);
        default:
            console.log("Error with operator: " + operator);
            return null;
    }
}

function pushEqualButton() {
    if (operator === '' || operand1 === "ERROR") {
        return;
    }
    ans = String(operate(Number(operand1), Number(operand2), operator));
    displayAns();
}

function pressNumber(digit) {
    if (ans) {
        pressAllClear();
    }
    if (operator === '') {
        operand1 = addDigit(digit, operand1);
    } else {
        operand2 = addDigit(digit, operand2);
    }
    updateDisplayDigit();
}

function addDigit(digit, operand) {
    if (operand.length > 10) {
        return operand;
    }
    if (operand === '0') {
        if (digit ==='0') {
            return '0';
        } else if (digit === '.') {
            return '0.';
        } else {
            return digit;
        }
    } else {
        if (digit != '.' || (digit === '.' && !operand.includes('.'))) {
            return operand + digit;
        } else {
            return operand;
        }
    }
}

function pressOperator(op) {
    if (operator === '') {
        operator = op;
        operand2 = '0';
        updateDisplayOperator();
    } else {
        pushEqualButton();
        operand1 = ans;
        operand2 = '0';
        operator = op;
        ans = '';
        updateDisplayOperator()
    }
}

function displayAns() {
    const dispTop = document.querySelector('#screen .top');
    const dispBot = document.querySelector('#screen .bot');

    const op1Display = (operand1.length > 11) ? Number.parseFloat(operand1).toExponential(5) : operand1;
    const op2Display = (operand2.length > 11) ? Number.parseFloat(operand2).toExponential(5) : operand2;

    dispTop.textContent = op1Display + ' ' + operator + ' ' + op2Display + ' =';
    if (ans.length > 11) {
        dispBot.textContent = Number.parseFloat(ans).toExponential(5);
    } else {
        dispBot.textContent = ans;
    }
}

function pressAllClear() {
    operand1 = '0';
    operand2 = '';
    operator = '';
    ans = '';

    const dispTop = document.querySelector('#screen .top');
    const dispBot = document.querySelector('#screen .bot');
    dispTop.textContent = '';
    dispBot.textContent = operand1;
}

function pressDel() {
    if (ans != '') {
        return;
    }
    if (operator === '') {
        // work on operand 1
        if (operand1.length === 1) {
            operand1 = '0';
        } else {
            operand1 = operand1.slice(0, operand1.length - 1);
        }
    } else {
        // work on operand 2
        if (operand2.length === 1) {
            operand2 = '0';
        } else {
            operand2 = operand2.slice(0, operand2.length - 1);
        }
    }
    updateDisplayDigit();
}

function updateDisplayDigit() {
    // Add to the main display, do not change upper display
    const toDisplay = (operator === '') ? operand1 : operand2;
    const disp = document.querySelector('#screen .bot');
    disp.textContent = toDisplay;
}

function updateDisplayOperator() {
    const dispTop = document.querySelector('#screen .top');
    const dispBot = document.querySelector('#screen .bot');

    const op1Display = (operand1.length > 11) ? Number.parseFloat(operand1).toExponential(5) : operand1;

    dispTop.textContent = op1Display + ' ' + operator;
    dispBot.textContent = operand2;
}

// Non-function definitions

let operand1 = '0';
let operand2 = '';
let operator = '';
let ans = '';

// Assign number buttons
const numButs = document.querySelectorAll(".number.calc-but");
numButs.forEach((num) => {
num.addEventListener("click", () => 
        {pressNumber(num.innerText)}
    )
});

// Assign AC button
const acBut = document.querySelector(".clear.calc-but");
acBut.addEventListener("click", pressAllClear);

// Assign equals
const eqBut = document.querySelector(".eq.calc-but");
eqBut.addEventListener("click", pushEqualButton);

// Assign delete
const delBut = document.querySelector(".del.calc-but");
delBut.addEventListener("click", pressDel);

// Assign operators
const opButs = document.querySelectorAll(".operator.calc-but");
opButs.forEach((op) => {
op.addEventListener("click", () => 
        {pressOperator(op.innerText)}
    )
});