function isLeapYear(year){ 
  
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){ 
       console.log('Leap year');
    }
    else{ 
        
        console.log('not a leap year');
    }
 }

 const check =isLeapYear(2021);
 console.log(check);
// output a kno undefined dekasse