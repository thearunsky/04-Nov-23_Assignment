let first = 10;
let second = 25;

// We will store all number in this variable array
let array = []

if(first===second){

    console.log("Both numbers are same.")

}else if(first<second){

    for (++first; first <= second; first++) {  
        array.push(first) 
    }
    
}else{
    
    for (++second; second <= first; second++) {
        array.push(second) 
    }
}

// In order to get output like this :- 11,12......,25
console.log(array.join(","));