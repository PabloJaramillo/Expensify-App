const promise = new Promise ((resolve, rejects) => {
    setTimeout(() => {
        // resolve({
        //     name:'Pablo'
        // });
        rejects ('Something Gone Wrong');
    }, 3000)
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});