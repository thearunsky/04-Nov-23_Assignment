function makeTea() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Tea is ready!")
        }, 1000 * (parseInt(Math.random()*10/2)+1))
    })
}
function makeToast() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Toast is ready!")
        }, 1000 * (parseInt(Math.random()*10/2)+1))
    })
}
function makeAgg() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Agg is ready!")
        }, 1000 * (parseInt(Math.random()*10/2)+1))
    })
}


Promise.all([makeAgg(),makeTea(),makeToast()]).then(()=>{
    console.log("Full breakfast is ready!");
})