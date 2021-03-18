//Without function
var inch2 = 12;
var feet2 = inch2/12;
console.log(feet2,'Ft');

//with function

function inchToFeet(inch){ 
    var feet = inch/12;
    return feet;

}
var result = inchToFeet(12);
console.log(result,'Ft');
