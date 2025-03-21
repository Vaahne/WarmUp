// Arthemetic Operations

let num1 = 3, num2=9;

console.log("Addition ",num1+num2)
console.log("Multiplication ",num1*num2)
console.log("Substraction ",num2-num1)
console.log("Division ",num2/num1)

num1 = 43 , num2 = 2;
console.log("Modulo or mod ",num1%num2)

//  short hand to do operation like += , -= , /= , *= , %=

num1 += 3;
console.log("num1+=3",num1);
num2 *= 9;
console.log("num2 *= 9",num2);
num1 /=3 ;
console.log("num1 /=3",num1)

num2 %= 3 ;
console.log("num2 %= 3",num2)

//  ++ , --
num1++;  // adds 1 to num1
num2--;  // substracts 1 from num2

let newNum = 9;
let currentNum = newNum++;

console.log ("currentTest = test++",currentNum)
// gives 9 as currentNum


let test = 9;
let currentTest = ++test;
console.log ("currentTest = ++test ",currentTest); // gives 10 as we moved ++ before the test

//  Exponent (**)
let expo = 2 ** 4;
console.log("expo = 2 ** 4",expo)
