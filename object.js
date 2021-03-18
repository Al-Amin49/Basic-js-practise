var student ={id:121, phone:1456, name:'Al-Amin'};
var student2 ={ id:465, phone:868, name:'Mahin'};
//object property 3 babe lika jay
var phoneNo1 = student.phone;
var phoneNo2= student['phone'];
var phonePropertyName='phone';
var phoneNo3 = student[phonePropertyName];
//update Al-Amin's phone number
student.phone=3444;
console.log(phoneNo1);
console.log(student);

