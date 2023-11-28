let start = 1

let arrayOfAscending = []
let arrayOfDescending = []

while (start<=25){
    arrayOfAscending.push(start)
    start++
}

// Because during first loop it became 26, but we want 25
start--

while ((start)>=1){
    arrayOfDescending.push(start)
    start--
}

console.log("Ascending Order",arrayOfAscending);
console.log("Descending order : ",arrayOfDescending);