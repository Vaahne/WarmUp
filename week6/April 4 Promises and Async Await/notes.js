///////////////////////////////////
// Creating & Consuming Promises //
///////////////////////////////////

// Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Guess this worked!");
//     // reject("Oh no! Something went wrong")
//   }, 1000);
// });

// Add some then() methods to handle additional tasks.
// myPromise
// .then((msg) => {
//   console.log(msg);
//   return msg + ' Again?';
// })
// .then((msg) => {
//   console.log(msg);
//   return msg + ' Third time!';
// })
// .then((msg) => {
//   console.log(msg);
//   return msg + ' Promises are cool.';
// })
// .then((msg) => {
//   console.log(msg)
// })
// .catch((err) => {
//   console.error(err);
// })
// .finally(() => {
//   console.log("Thank you anyway");
// })

///////////////////////
// Composition Tools //
///////////////////////

/*
Promise provides four tools for running asynchronous operations concurrently, called "composition tools."

- The first, Promise.all(), allows us to start several asynchronous operations at the same time, and wait for them all to finish before executing a then().
- If any of the promises in the provided array rejects, the operation is aborted.
*/

const makeDinner = new Promise((resolve, reject) => {
    resolve('Dinner is made')
  })
  
  const cleanRoom = new Promise((resolve, reject) => {
    // reject('Error from cleanRoom') // If this is commented in, the operation will abort and .catch() will run instead
    resolve('Room is cleaned')
  })
  
  const removeTrash = new Promise((resolve, reject) => {
    resolve('Trash is removed')
  })
  
  Promise.all([makeDinner, cleanRoom, removeTrash])
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  
  /*
  - As an alternative, Promise.allSettled() has similar behavior.
  - This will return an array of objects, where each object represents the corresponding promise given as an input to .allSettled().
  - The object will contain the status of the promise, whether fulfilled or rejected, as well as the value/error retrieved from the resolve/reject
  */
  
  const errorOut = new Promise((resolve, reject) => {
    reject('Error from errorOut')
  })
  
  Promise.allSettled([makeDinner, cleanRoom, removeTrash, errorOut])
    .then((result) => console.log(result))
  
  /*
  - The opposite of Promise.all is Promise.any, which returns the fulfillment value of the first Promise to resolve within the input array
  - It only rejects if all of the input promises reject, and throws an AggregateError
  */
  
  const promise1 = Promise.reject(0); // creates and returns a rejected Promise with the reason set to the value 0
  const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
  const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
  
  Promise.any([promise1, promise2, promise3])
    .then((value) => console.log(value)) // Logs 'quick' because promise2 was the first promise to fulfill
    .catch((error) => console.log('Error from Promise.any() => ' + error)); // Logs 'quick' because promise2 was the first promise to fulfill
  
  /*
  - The final compositional tool, Promise.race, also takes an array of promises but fulfills or rejects based on the first promise in the array to settle (either fulfill or reject). 
  - It doesn't wait for all promises to settle; it settles as soon as the first one does.
  */
  
  const promises = [
    new Promise(resolve => setTimeout(() => resolve("First resolved"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Second resolved"), 500)),
    new Promise((resolve, reject) => setTimeout(() => reject("Third rejected"), 800))
  ];
  
  Promise.race(promises)
    .then((value) => console.log(value)) // Outputs: Second resolved
    .catch((error) => console.log('Error from Promise.race() => ' + error)) // Outputs: Second resolved
  
  
  
  
  
  
  