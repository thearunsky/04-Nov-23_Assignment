/* 
Problem Statement 2
Describe the usage of the comma operator in JavaScript and provide an example.Solution

Ans :

The comma is an operator in JavaScript that returns the last operand while evaluating all operands in an expression. 
The evaluation is from the left to right direction.

Usages :-
    The comma operator can also be used in variable declarations, 
    allowing you to declare multiple variables in a single statement. 
        For example:    
        let x=1,y=2,z=3

    The comma operator is often used in the initialization and update parts of a for loop. 
        For example:
        for (var i = 0, j = 10; i < 5; i++, j--) {
            // loop body
        }
*/

// For Example :
const a = 1, b = 2, c = 3;

// Last value will be return to this result variable
const result = (a++, b++, c++);


console.log(a, b, c);                                       // Outputs 2 3 4

console.log(result);                                        // Outputs 3
