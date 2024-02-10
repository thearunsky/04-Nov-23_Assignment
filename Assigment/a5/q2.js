function makeTea() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Tea is ready!")
        }, 2000)
    })
}
function makeToast() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Toast is ready!")
        }, 3000)
    })
}
prepareBreakfast()
function prepareBreakfast(){
    const pr = makeTea()
    pr.then((val) => {
        console.log(val)
    }).then(()=>{
        const pr1 = makeToast()
        pr1.then((val)=>{
            console.log(val)
        })
    }).catch((err)=>{
        console.log("Handel",err)
    })
    
}