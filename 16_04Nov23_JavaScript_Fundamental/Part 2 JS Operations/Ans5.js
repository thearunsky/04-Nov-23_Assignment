// Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest = (principal * rate * time) / 100.


// 2000 rupee, 10 % intrest, for 3 year
const [loanAmount,rate,time] = [2000,10,3]

const SI = (loanAmount * rate * time)/100

const totalAmount = loanAmount + SI



console.log(`${rate}% of your amount ${loanAmount} rupee for ${time} year is : ${SI} rupee /-`);
console.log("You have to pay : " + totalAmount + " rupee /-");