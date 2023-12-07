// Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate arithmetic operators.

const radius = 10
const unit = "meter"

const areaOfcircle = (22/7) * (radius*radius)

// toFixed(2) is used to round the number
console.log(`Area of circle is : ${areaOfcircle.toFixed(2)} ${unit} square`);