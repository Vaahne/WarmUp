let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");
let todoForm = document.getElementById("todoForm")
let submit = document.getElementById("submit");
let body = document.querySelector("body");
// alert("hi");

// This function trigger for every clikc on the body and displays target on console
body.addEventListener('click',(e)=>{
    console.log(e.target);
});
// for whole document itself
document.addEventListener('click',(e)=>{
    // e.preventDefault(); //prevents action of refreshing
    // e.target.classList.add('color:red'); 
    alert("this is ",e.target);   
})

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault(); //prevents action of refreshing
})

submit.addEventListener("click",handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    
    let input = todoInput.value;

    if(input == ''){
        alert("Input is blank");
        return;
    }
    let newTodo = document.createElement("li");
    newTodo.textContent = input;

    todoList.appendChild(newTodo);
    todoInput.value = '';
    todoInput.focus();

}
