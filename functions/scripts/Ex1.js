let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

function returnEven(array) {
    let newArray = [];

    array.forEach((element) => {
        if (element % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
let newArray = returnEven(numArray);
console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]