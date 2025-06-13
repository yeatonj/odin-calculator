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

function equalButton() {
    if (operator === '' || operand1 === "ERROR") {
        return;
    }
    ans = String(operate(Number(operand1), Number(operand2)));
    displayAns();
}

function displayAns() {
    // !! TBI
}


// Non-function definitions

let operand1 = '0';
let operand2 = '0';
let operator = '';
let ans = '';