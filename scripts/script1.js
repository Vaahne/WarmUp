/**
 * Problem: Count Orders by Product
 * 
 * Given an array of order strings, you need to count how many times each product was ordered.
 * 
 * Task:
 * - You will receive an array of order strings.
 * - Each order string is in the format: "<OrderID>-<ProductCode>-<Quantity>"
 * 
 * Your task is to loop through the orders, extract the product code and quantity, 
 * and count how many times each product was ordered.
 */

// Sample data (Array of orders)
let orders = [
    "ORD001-XYZ123-3",
    "ORD002-ABC456-1",
    "ORD003-XYZ123-5",
    "ORD004-DEF789-2",
    "ORD005-XYZ123-8"
];


// Object to store the count of each product
let productCount = {};

// Your code here ---------------------------

for(let i of orders){
    let a = [];
    a = i.split('-');
    productCount[a[1]] = a[2];
    // console.log(a);
}

// Output the product count object
console.log(productCount);``
// Expected Output: { XYZ123: 16, ABC456: 1, DEF789: 2 }

