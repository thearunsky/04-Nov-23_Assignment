function fetchSequentially(urls) {

    console.time()
    urls.forEach((element) => {

        new Promise( (res, rej) => {
            setTimeout( ()=>{
                 res(fetch(element))
            },3000)
        })
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })

    });
    console.timeEnd()
}

fetchSequentially(["https://dummyjson.com/products/1", "https://dummyjson.com/products/2", "https://dummyjson.com/products/3"])