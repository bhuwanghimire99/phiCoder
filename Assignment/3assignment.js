// WAP to display the fibonecci series up to nth terms.

function fiboo(){
    let a , sum = 0;
    let b = 1;
    let n = 50;
    console.log("the fibonacci number are :")
    while(sum<=n){
        console.log( sum)
        a=b;
        b=sum;
        sum  = a+b;

    }
}
fiboo()