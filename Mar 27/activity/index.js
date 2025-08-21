// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

cBtn.addEventListener("click",addComment);

function addComment(e){
    let inputVal = cInput.value;
    let li = document.createElement("li");
    li.textContent = inputVal;
    cList.appendChild(li);
    cInput.focus();

}


