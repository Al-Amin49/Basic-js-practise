var a =5;
var b=7;
console.log('before swap: a=', a, 'b=',b);
var temp =a;
a=b;
b=temp;
console.log('after swap: a=', a, 'b=',b);
//another two ways to swap variable

 var x=5, y=7;
 console.log('before swap: x=', x, 'y=',y);
 x=x+y; //x=12
 y=x-y; // y=12-7=5
 x=x-y; // x=7
 console.log('after swap: x=', x, 'y=',y);


 var p=15, q=17;
 console.log('before swap: p=', p, 'q=',q);
 [p,q]=[q,p];
 console.log('after swap: p=', p, 'q=',q);

