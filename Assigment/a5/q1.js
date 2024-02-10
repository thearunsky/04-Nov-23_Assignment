function makeTea() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Tea is ready!")
        }, 2000)
    })
}
const pr = makeTea()
pr.then((val) => {
    console.log(val)
})