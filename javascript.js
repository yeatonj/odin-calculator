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
    if (operator === '') {
        operand1 = addDigit(digit, operand1);
    } else {
        operand2 = addDigit(digit, operand2);
    }
}

function addDigit(digit, operand) {
    if (operand.length > 10) {
        return;
    }
    if (operand === '0') {
        if (digit ==='0') {
            return '0';
        } else {
            return digit;
        }
    } else {
        return operand + digit;
    }
}

function pressOperator(op) {
    if (operator === '') {
        operator = op;
        operand2 = '0';
    } else {
        pushEqualButton();
        operand1 = ans;
        operand2 = '0';
        operator = op;
    }
}

function displayAns() {
    // !! TBI
    console.log(ans);
}

function pressAllClear() {
    operand1 = '0';
    operand2 = '';
    operator = '';
    ans = '';
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

const acBut = document.querySelector(".clear.calc-but");
acBut.addEventListener("click", pressAllClear);

const eqBut = document.querySelector(".eq.calc-but");
eqBut.addEventListener("click", pushEqualButton);

// Assign operators
const opButs = document.querySelectorAll(".operator.calc-but");
opButs.forEach((op) => {
op.addEventListener("click", () => 
        {pressOperator(op.innerText)}
    )
});