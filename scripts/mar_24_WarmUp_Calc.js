/*
 * 1.) Declare a function named calculate
 * 2.) Function takes 3 parameters: num1, num2, operand
 * 3.) Within function use a switch statement that observes the operand
 * 4.) The switch statement has 4 'cases':
 ****** Addition, Subtraction, Multiplication, Division
 * 5.) Each case will call (invoke/run) a helper function that returns the output from each of those functions
 *
 *  - 5 Total functions - calculate, sum, difference, multiply, divide
 *  - Bonus:
 *  - Use rest parameters or the 'arguments' keyword to make your function more dynamic.
 *  - Add exponentiation to your calculator
 */

function startHere(){
    let num1 = prompt("Enter your first Num");
    let num2 = prompt("Enter your first Num");
    let operator = prompt("Enter your Operator");

    calC(operator,num1,num2);
}

startHere();
//calC('/',8,2);


function calC(operand,...nums){
    switch(operand){
        case '+' : console.log(`Sum is: ${add(...nums)}`);
                    break;
        case '-' : console.log(`Difference is: ${difference(...nums)}`);
                    break;
        case '*' : console.log(`Product is: ${multiply(...nums)}`);
                    break;
        case '/' : console.log(`Division val is : ${divide(...nums)}`);
                    break;
        default :  console.log(`exponential val is: ${exp(...nums)}`);
    }
}
function add(...nums){
    let sum = 0;
    for( let i of  nums)
        sum += i;
    return sum;
}
function multiply(...nums){
    let val = nums.reduce((s,n) => s*n,1);
    return val;
}
function divide(...nums){
    if(nums.indexOf(0) != -1)
        return "Divide by 0 Err";
    let v = nums.reduce((d,n)=>d/n);
    return v;
}
function difference(...nums){
    let diff = nums.reduce((t,num) => t-num );
    return diff;
}
function exp(...nums){
    let val = nums.reduce((t,n)=>n**t,1);
    return val;
}