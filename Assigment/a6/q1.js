function processData() {

    function fetchData() {
        return new Promise((res, rej) => {
            console.log("Fetching Data Started")
            setTimeout(() => {
                console.log("Data Feached Successfully")
                res([2, 4, 1, 5])
            },2000)
        })
    }
    function analyzeData(arrOfNum) {
        return new Promise((res, rej) => {
            console.log("Analysing Data Started")
            setTimeout(()=>{
                const negOrPos = arrOfNum.every((ele) => {
                    return ele >= 0
                })
                if (negOrPos) {
                    console.log("All numbers are positive")
                    const sum = arrOfNum.reduce((acc, curr) => {
                        return curr += acc
                    }, 0)
    
                    const avg = sum / arrOfNum.length
                    res({ sum, avg })
                }
                else (
                    rej("One of array number is negative")
                )
            },2000)
        })
    }
    fetchData().then((value) => {
        return value
    }).then((value) => {
        analyzeData(value).then((value) => {
            console.log("Analysed Data Successfully")
            console.log("DATA is", value)
        }, (value) => {
            console.log("Analysed Data Failed")
            console.log("Due to", value)
        })
    })


}

processData()