//convert string to number

var number1=25;
var number2='13.4';
number3='23.5'
number2= parseFloat( number2);// string to number
// shortcurt way to string to number
number3 =+number3;

console.log(number1+number2);
console.log(number1+number3);
//number to string 
var num1 = 34;

num1 =""+ num1;

console.log( typeof num1);

// to fix fractional number 

var numOne = 0.1;
var numTwo =0.2;
var total = numOne + numTwo;
total= total.toFixed(3);
console.log('to fix fractional number:',total);