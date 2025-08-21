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
 startHere();
 // loop as many number of times user wants to calculate
 function startHere(){

    do{
        let num1 = Number(prompt("Enter your first Number"));
        let num2 = Number(prompt("Enter your Second Number"));
        let operator = prompt("Enter your Operator \n +,-*,/");
        if(!isNaN(num1) && !isNaN(num2))
            calC(operator,Number(num1),Number(num2));
        else{
            alert("Please enter valid numbers");
            continue;
        }

        let confirm = window.confirm("Do you want to continue?");
        if(!confirm)
            break;
    }while(true);
    alert("Have a Good Day!");
}

// Operations
function calC(operand,...nums){
    switch(operand){
        case '+' : alert(`Sum is: ${add(...nums)}`);
                    break;
        case '-' : alert(`Difference is: ${difference(...nums)}`);
                    break;
        case '*' : alert(`Product is: ${multiply(...nums)}`);
                    break;
        case '/' : alert(`Division val is : ${divide(...nums)}`);
                    break;
        default :  alert(`exponential val is: ${exp(...nums)}`);
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