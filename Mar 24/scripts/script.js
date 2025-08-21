// .JS operations

let input = document.getElementById('input1');
// alert(input.value);

//creating an element and adding to html

let newEle = document.createElement("li");
let newButton = document.createElement("button");

// adding to DOM
// let todoList = document.getElementById("todoList");
let todoList = document.querySelector("#todoList");

newEle.innerText = "Hi Hi" ;
todoList.appendChild(newEle);
alert("hi");
console.log(todoList);

