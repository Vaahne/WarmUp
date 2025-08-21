const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Guess thsi worked");
        reject("This is ok");
    },1000);
});

myPromise
.then((msg)=>{
    console.log(msg);
    return msg + 'again';
})
.then((msg)=>{
    console.log(msg);
    return msg + '2nd';
})
.then((msg)=>{
    console.log(msg);
    return msg + '3rd';
})
.then((msg)=>{
    console.log(msg);
    return msg + '4th';
})
.catch((err)=>{
    console.log(err);
})