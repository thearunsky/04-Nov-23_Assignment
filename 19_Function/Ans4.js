function calculateTax() {

    const range = {
        // less than 1 lakh
        0 : 0.05,

        // Greater than 1 lakh and less than 2.5 lakh
        100000 : 0.1,

        // Greater than 2.5 lakh and less than 5 lakh
        250000 : 0.15,

        // Greater than 5 lakh and less than 10 lakh
        500000 : 0.25,

        // Greater than 10 lakh and less than 30 lakh
        1000000 : 0.4,

        // Greater than 30 lakh
        3000000 : 0.5
    }
    
    // It is closure, it has access of range variable even after main fuction pop out from the call stack
    return function (income) {

        // Get all ranges as an array
        const array = Object.keys(range)
        
        // Itrating each and every array
        for (let i = 0; i < array.length; i++) {

            // If income is greater than first-range than and less than next-range
            if(income >= array[i] && income < array[i+1]){

                // It will return tax and close whole function
                return `You have to pay ${income * range[array[i]]} /- Rupee tax for ${income} /- this income`
            }
        }

        // If income is greter than all ranges
        return `You have to pay ${income * 0.5} /- Rupee tax for ${income} /- this income`
    }
}

const tax = calculateTax()

console.log(tax(500))
console.log(tax(110000))
console.log(tax(260000))
console.log(tax(760000))
console.log(tax(110000))
console.log(tax(5000000))