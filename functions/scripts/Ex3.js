function outer() {

       let count = 0;
    
       function inner() {
    
          count += 1;
    
          return count;
    
    }  
    
    return inner;
    
    }
    
    const increment = outer();
    
    console.log(increment());
    
    console.log(increment());



const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits")
// console.log(fruits.entries())

// List the Entries
let text = "";
for (let x of fruits.entries()) {
    console.log(x);
  text += x;
}