var price1=  25;
var price2 =35;
var total= price1*price2;
var total2= price1/price2;
total2 = total2.toFixed(2);
var total3 = price2 % price1;
console.log(total);
console.log(total2);
console.log('modullas',total3);
//increment decrement
price2++;
price1--;

console.log('increment', price2);
console.log('decrement', price1);

// string fullname display
var firstName ='Al-Amin';
var lastName ='Ahmed';
var fullName = firstName + ' '+ lastName;
console.log('My name is: ',fullName);

//12-8 Math absolute round floor ceil random
var number = 5.50;
var result = Math.ceil(number);
console.log('',result);

// round a 5.49 hole 5 dekabe . 5.50 hole 6 dekabe. ceil a 5.01 hole 0 6 dekabe . 5.00 hole  5 dekabe. floor a 5.99 hole 0 5 dekabe. r 5.00 hole 5 dekabe

var num2 = 44.33;
var result2 = Math.random();
console.log(result2);
//random mane jekono shonka ashte pare.