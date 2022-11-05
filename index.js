module.exports.add = add;
module.exports.multiply = multiply;
module.exports.subtract = subtract;
module.exports.divide = divide;
module.exports.power = power;

function add(...number) {
    let sum = 0;
    number.forEach(x => sum += x);
    return sum;
}

function multiply(...number) {
    sum = 1
    number.forEach(x => sum *= x);
    return sum
}

function subtract(number1, number2) {
    return number1 - number2
}

function divide(number1, number2) {
    return number1 / number2
}

function power(base, power) {
    return base ** power
}