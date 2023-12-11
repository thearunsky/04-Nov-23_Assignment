function factorial(num){

    // When number is become 1 then this will pop out the upper call stack close
    if(num<=0){
        return "Please enter valid number"
    }
    if(num==1){
        return 1
    }

    return num*factorial(num-1)
    // num * (num-1 * (num-1-1).......n)


}

console.log(factorial(5));

console.log(factorial(4));

console.log(factorial(12));

console.log(factorial(2));