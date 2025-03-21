const myPerson = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}
// 1. Create var to save new object
// 2. cache return va of JSON.stringify(object to copy) in new var
// 3. reaasign new var to json.parse(newvar)

console.log(myPerson);
let e = JSON.stringify(myPerson);   // Converting Object to String
console.log(e);

e = JSON.parse(e);  // Converts to Object to string
console.log(e);

