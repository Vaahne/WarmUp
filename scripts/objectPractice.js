//let sampleData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let sampleData = `ID,Name,Occupation,Age,Tag\n42,Bruce,Knight,41,1\n57,Bob,Fry Cook,19,2\n63,Blaine,Quiz Master,58,3\n98,Bill,Doctor’s Assistant,26,4`;
//let sampleData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`

let arraysOfCells = [[]];
let currentCell = "";
let currentColumn = 0;
let numberOfColumns = 0;
let numberOfRows = 0;
for (ch of sampleData) {
    if (ch == `,`) {
        arraysOfCells[numberOfRows][currentColumn] = currentCell;
        currentCell = "";
        currentColumn++;
    } else if (ch == `\n`) {
        //console.log(cell[0], cell[1], cell[2], cell[3]);
        arraysOfCells[numberOfRows][currentColumn] = currentCell;
        numberOfRows++; //starting a new row
        arraysOfCells[numberOfRows] = []; //starting a new array for row
        numberOfColumns = currentColumn; //all rows contain the same number of columns
        currentColumn = 0;
        currentCell = "";

    } else {
        //arraysOfCells[numberOfRows][currentColumn] += ch;
        currentCell += ch;
    }
}
if (sampleData[sampleData.length] != '\n') { //if sample data doest end with \n then we should output last row
    arraysOfCells[numberOfRows][currentColumn] = currentCell;
}

console.log("-------------Array of cells--------------------");
arraysOfCells.forEach(it => {
     console.log(it);
})

//Part 3: Transforming Data
let arrayOfObjects = [];
arraysOfCells.forEach(it => {
    arrayOfObjects.push({
        id: it[0],
        name: it[1].toLowerCase(),
        occupation: it[2].toLowerCase(),
        age: it[3]
    })
})
arrayOfObjects.shift(); //removing the header

console.log("-------------Array of objects--------------------");
arrayOfObjects.forEach(it => {
     console.log(it);
})


//Part 4: Sorting and Manipulating Data
//1.Remove the last element from the sorted array.
arrayOfObjects.pop()
console.log("-------------Array of objects (last object removed)--------------------");
arrayOfObjects.forEach(it => {
     console.log(it);
})

//2.Insert the following object at index 1:
arrayOfObjects.splice(1,0,{ id: "48", name: "Barry".toLowerCase(), occupation: "Runner".toLowerCase(), age: "25" }) //toLowerCase() is for consistancy of objects
console.log("-------------Array of objects (object inserted at index 1)--------------------");
arrayOfObjects.forEach(it => {
     console.log(it);
})

//3.Add the following object to the end of the array:
arrayOfObjects.push({ id: "7", name: "Bilbo".toLowerCase(), occupation: "None".toLowerCase(), age: "111" })
console.log("-------------Array of objects (object added at the end)--------------------");
arrayOfObjects.forEach(it => {
     console.log(it);
})

//Finally calculate the average age of the group
let averageAge = 0;
for (object of arrayOfObjects){
    averageAge+= parseInt(object.age)
}
averageAge/=arrayOfObjects.length;
console.log(`Avarage age of persons are ${averageAge}`);

//Part 5: Full Circle
let CSV = JSON.stringify({id:`ID`, name:`Name`,occupation:`Occupation`,age:`Age`})+`\n`;
arrayOfObjects.forEach (it =>{
    CSV+=JSON.stringify(it)+`\n`
})
console.log("-------------New CSV (Full Circle)--------------------");
console.log(CSV);