//Part 1: Fizz Buzz
console.log(`\n--------------------------- PART 1 -----------------------`);
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`Fizz Buzz`);
    } else if (i % 5 == 0) {
        console.log(`Buzz`);
    } else if (i % 3 == 0) {
        console.log(`Fuzz`);
    } else {
        console.log(i);
    }
}

//Part 2: Prime Time
console.log(`\n--------------------------- PART 2 -----------------------`);

let num = 4621;
let nextPrime = num;
let isPrime = false;
do {
    nextPrime++;
    isPrime = true;
    for (let i = nextPrime - 1; i > 1; i--) {
        if (nextPrime % i == 0) {
            isPrime = false;
            break;
        }
    }
} while (!isPrime)
console.log(`Next prime number from the number ${num} is ${nextPrime}`);

//Part 3: Feeling Loopy
console.log(`\n--------------------------- PART 3 -----------------------`);

//let sampleData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let sampleData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`

let cell = [``, ``, ``, ``];
let i = 0;
for (ch of sampleData) {
    if (ch == `,`) {
        i++
    } else if (ch == `\n`) {
        console.log(cell[0], cell[1], cell[2], cell[3]);
        i = 0; //starting a new row
        cell = [``, ``, ``, ``]; //clearing the cells
    } else {
        cell[i] += ch;
    }
}
if (sampleData[sampleData.length] != '\n') {
     console.log(cell[0], cell[1], cell[2], cell[3]);
}