// 1) Write a program to find the sum of first 10 counting numbers and log it to the console.

function mySum(){
    let sum = 0;
    for(let i = 1; i<=10;i++){
sum = sum + i;
    }
    return sum;
}
const result = mySum();
console.log(result);

