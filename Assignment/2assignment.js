// 2) Write a program to display the sum and difference of any two numbers using functions.

function calc(a,b){
    let sum =0;
    let diff=0;
    sum = a+b;
    diff = a-b;
    return [sum, diff]; // returning multiple values as an array

}

const [sum , diff]= calc(8,5);
console.log("the sum is : " + sum + " the diff is ", diff);
