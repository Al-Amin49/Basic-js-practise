// var fact =1;
// for(i=1;i<5;i++){ 
//     fact= fact*i;
// }
// console.log(fact);


//By while loop
function factorial (n){ 
    var i =1, fact=1;
    while(i<=n){ 
        fact=fact*i;
        i++;
    }
    return fact;
}
var result= factorial(6);
console.log(result);

//By for loop
function factorial2 (num){ 
 let fact=1;
 for(i=1;i<=num;i++){ 
     fact = fact*i;
 }
 return fact;
}
var result2= factorial2(5);
console.log(result2);