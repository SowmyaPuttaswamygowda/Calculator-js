// Say hello let'us build a calculator
//alert("Hello there, let'us build a calculator");
debugger;
//ask the user for two numbers
let num1 = Number(prompt('Enter the first number:')) ;
let num2 = Number(prompt('Enter the second number:'));

while (isNaN(num1) || isNaN(num2)) {
    num1 = Number(prompt('Enter the first number: ')) ;
    num2 = Number(prompt('Enter the second number: '));
}
// ask for type of opertion
const operation = prompt('Enter the operation (+, -, *, /):');


let result;
if  (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2; 
} else if (operation === '/') {
    result = num1 /num2;
} else {
    result = 'Invalid opertion';
}

alert(`The result is: ${result} `);


    
 