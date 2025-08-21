const makeDinner = new Promise((resolve,reject) =>{
    resolve('Dinner is made');
})

const cleanRoom = new Promise((resolve,reject)=>{
    reject("Room is cleaned");
})

const removeTrash = new Promise((resolve,reject)=>{
    resolve("Trash is cleanred");
})

Promise.all([makeDinner,cleanRoom,removeTrash])
.then((msg) => {
    console.log(msg);
})
.catch((err)=> console.error(err));


Promise.allSettled([makeDinner,cleanRoom,removeTrash])
.then((msg) => {
    console.log(msg);
})