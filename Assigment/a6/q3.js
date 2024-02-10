class PromiseQueue{

    constructor(){
        this.promise = new Promise(res=>{
            console.log("Class promise start executing");
            setTimeout(()=>{
                res("Class promise Ressolved!!")
            },2000)
        })
    }

    add(promiseFunction){
        this.promise.then((val)=>{
            console.log(val);
        }).then(()=>{
            return promiseFunction()
        }).then((val)=>{
            console.log(val);
        })
    }
}

function newPromise(){
    return new Promise(res=>{
        console.log("Function promise start executing");
        setTimeout(()=>{
            res("Funtion Promise Ressolved")
        },1000)
    })
}

const pr = new PromiseQueue()
pr.add(newPromise)
pr.add(newPromise)
pr.add(newPromise)