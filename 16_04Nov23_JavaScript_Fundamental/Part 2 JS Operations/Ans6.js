// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.

// weigth should be (kg)
// Height should be (m)
const weight = 75
const height = 1.75

const BMI = weight / (height * height)


// toFixed(2) is used to round the number
console.log(`Your BMI is ${BMI.toFixed(2)}`);