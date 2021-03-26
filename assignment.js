// function kilometerToMeter(meter){ 
//     kilometer= meter*1000;
//     return kilometer;

// }
// var result = kilometerToMeter(5);
// console.log(result,'meter');

// function budgetCalculator(watch, phone, laptop){ 
//     var total =watch*50+phone*100+laptop*500;
//     return total;
// }
// var totalCost= budgetCalculator(5,7,8);
// console.log(totalCost);
   
function hotelCost(vara){ 
   var totalKhoros=0;
    if(vara<=10){
        totalKhoros=vara*100;
    }
    else if(vara<=20){ 
        var firstTen=10*100;
        var  remaining= vara-10;
         var secondTen= remaining*80;
         totalKhoros= firstTen+ secondTen;
    }
    else{ 
        var firstTen=10*100; 
        var secondTen=10*80; 
        var remaining=vara-20;
        var ThirdDays= remaining*50;
        totalKhoros= firstTen+secondTen+ThirdDays;

    }
    return totalKhoros;
}
var cost =hotelCost(22);
console.log(cost);
