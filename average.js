let student = [];
let sumAge = 0;
let avgAge = 0;
for (let i = 0; i <= 10; i++){
    let age = prompt("enter your age");
    let userAge = Number(age);
    student.push(userAge);
    sumAge += student[i];
    avgAge = sumAge/student.length;
}
alert("the average :" + avgAge);