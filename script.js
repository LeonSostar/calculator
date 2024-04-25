let firstNum = 0;
let secondNum = 0;

function add(a, b)  {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b)  {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b)  {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b)  {
    return Math.round((a / b) * 100) / 100;
}

console.log(add(2.32432324, 4));
console.log(subtract(2.32432324, 4));
console.log(multiply(2, 4));
console.log(divide(9, 3.5));