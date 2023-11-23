/*
Problem Statement 4
Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the
person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.
*/


const age = 16
// const age = 22
// const age = 18

console.log(`You ${age>=18 ? "can" : "cannot"} vote`);