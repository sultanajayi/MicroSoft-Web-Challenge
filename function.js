/** function square(n) {
    const myNum = n*n
    console.log(myNum)
    //return myNum;
}

function displayGreet(name, sal = 'Hello') {
    console.log(`${sal}, ${name}`)
}**/


let currentMoney = 800000;
let laptopPrice = 200000;

/** if (currentMoney >= laptopPrice){
    //Condition is true. Code in this block will run.
    console.log("Getting a new laptop!");
}


if (currentMoney >= laptopPrice){
    //Condition is true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else{
    //Condition is false. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}**/



let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition is true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition is true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}

//square(25);