var readline = require('readline-sync');

var calculation = function(num1, num2, op) {
    this.x = parseInt(num1);
    this.y = parseInt(num2);
    this.op = op;

    this.result = function() {
        var x = this.x;
        var y = this.y;
        var op = this.op;

        if (op === "+") {
            var result = x + y;
        } else if (op === "-") {
            var result = x - y;
        } else if (op === "/") {
            var result = x * y;
        } else {
            var result = "Error!"
        }

        console.log("result: " + result);
    };
}

var num1 = readline.question("Please enter your first number: ");
var num2 = readline.question("Please enter your second number: ");
var op = readline.question("Please enter an operation to perform: add, sub, mul, or, div ");

var calc = new calculation(num1, num2, op);

calc.result();

var readLineSync = require('readline-sync');
var firstNumber = readLineSync.question("Please enter your first number: " );
var secondNumber = readLineSync.question("Please enter your second number: " );
var enteredOperator = readLineSync.question("Please enter the operation to perform(add, sub, mul, div): " )
// var name = readLineSync.question("What is your name?");
//console.log(name)

//adding two numbers
function addTwoNumbers (firstNumber, secondNumber) {
    return parseInt(firstNumber) + parseInt(secondNumber);
}

//subtracting two numbers
function subtractTwoNumbers (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

//multiplying two numbers
function multiplyTwoNumbers (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

//dividing two numbers
function divideTwoNumbers (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function myCalculator (firstNumber, secondNumber, enteredOperator) {
    if (enteredoperator === 'add') {
        console.log('The result is: ' + addTwoNumbers(firstNumber, secondNumber))
    }
    else if (enteredOperator === 'sub') {
        console.log('The result is: ' + subtractTwoNumbers(firstNumber, secondNumber))
    }
    else if (enteredOperator === 'mul') {
        console.log('The result is: ' + multiplyTwoNumbers(firstNumber, secondNumber))
    }
    else if (enteredOperator === 'div') {
        console.log('The result is: ' + divideTwoNumbers(firstNumber, secondNumber))
    }
}
myCalculator(firstNumber, secondNumber, enteredOperator)