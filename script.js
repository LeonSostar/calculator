let firstNum = '';
let secondNum = '';
let operator = '';
let equation = '';
let result;
const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const funcArr = ['add', 'subtract', 'multiply', 'divide'];

const inputField = document.querySelector('#result');
const elements = document.querySelector('#functions');

elements.addEventListener('click', (e) => {
    let valE = e.target;
    if (numArr.includes(valE.id)) {
        if (!operator) {
            firstNum += valE.textContent;
            equation += valE.textContent;
            inputField.textContent = equation;
        }
        else {
            secondNum += valE.textContent;
            equation += valE.textContent;
            inputField.textContent = equation;
        }
    }
    else if (funcArr.includes(valE.id)) {
        if (!operator) {
            operator = valE.textContent;
            equation += ' ' + valE.textContent + ' ';
            inputField.textContent = equation;
        }
        else {
            inputField.textContent = equation;
        }
    }
    else if (valE.id == 'clear') {
        equation = '';
        firstNum = '';
        operator = '';
        secondNum = '';
        inputField.textContent = equation;
    }
    else if (valE.id == 'equal') {
        if (operator == '/' && secondNum == '0') {
            inputField.textContent = 'DO NOT';
        }
        else if (firstNum && operator && secondNum) {
            result = operate(Number(firstNum), Number(secondNum), operator);
            firstNum = Number(result);
            equation = firstNum + '';
            inputField.textContent = firstNum;
            console.log(firstNum);
            operator = '';
            secondNum = '';
        }
    }
})

function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    return Math.round((a / b) * 100) / 100;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}