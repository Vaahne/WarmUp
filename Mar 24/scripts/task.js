// alert("hello");
let body= document.querySelector("body");
console.log(body);

let div1= document.createElement("div");
let div2= document.createElement("div");

body.appendChild(div1);
body.appendChild(div2);


let ol = document.createElement("ol");
let ul = document.createElement("ul");

div1.appendChild(ol);
div2.appendChild(ul);


createItems(ol,3,["Hi","hello","Hey"]);
// let li1= document.createElement("li");
// li1.innerHTML = 'Hi';
// let li2= document.createElement("li");
// li2.innerHTML = 'Hello';
// let li3= document.createElement("li");
// li3.innerHTML = 'Hey';
// ol.appendChild(li1);
// ol.appendChild(li2);
// ol.appendChild(li3);

createItems(ul,3,["HTML","CSS","JS"]);

// removeChild  , here it removes html li element
let removedLi = ul.removeChild(ul.firstChild);
//now we can use the removed element somewhere in the prog  
ul.appendChild(removedLi);  // HTML li will be added at the end

// let li4= document.createElement("li");
// li4.innerHTML = 'Html';
// let li5= document.createElement("li");
// li5.innerHTML = 'CSS';
// let li6= document.createElement("li");
// li6.innerHTML = 'Js';

// ul.appendChild(li4);
// ul.appendChild(li5);
// ul.appendChild(li6);

function createItems(parent,num,arr){
    for(let i =0;i<num;i++){
        let el = document.createElement("li");
        el.innerText = arr[i];
        parent.appendChild(el);
    }
}

//  Replacing elements
let newLiItems = document.createElement("li");
newLiItems.innerText = 'Hi hello';

ol.replaceChild(newLiItems,ol.childNodes[2]);

newLiItems.textContent = "Namaste";
newLiItems.innerHTML ="<h1>Namaste</h1>" // this adds as a html element

// changing element styles
let header = document.getElementsByTagName("h1");
let elem = header[0];
elem.style.backgroundColor = 'yellow';
elem.style.border = '2px solid red';
elem.style.borderRadius = '1rem';
elem.style.width = '10rem';

elem.style.transition = "all 1";

let alt =true;
setInterval(()=>{
    if(alt){
        elem.style.backgroundColor = 'pink';
        elem.style.color="black";
        alt = false;
    }else{
        elem.style.backgroundColor = 'yellow';
        elem.style.color="blue";
        alt = true;
    }
},700);

// changing attributes
let link = document.createElement("a");
link.textContent= 'LinkedIn';
link.setAttribute('href',"http://www/linkedin.com");
link.setAttribute("target","_blank");

body.appendChild(link);

// classList
link.classList.add("bodyClass");



function createPost(title, content) {
    // Creating a DocumentFragment
    const frag = document.createDocumentFragment();
  
    // Anything we do to the fragment here is not
    // processed in the live view of the document.
    // This allows for processing-heavy DOM changes
    // to occur without interrupting user experience.
    // These, however, are rather simple operations.
    const heading = frag.appendChild(document.createElement("h3"));
    heading.textContent = title;
    heading.style.margin = "0px";
  
    frag.appendChild(document.createElement("hr"));
  
    const div = frag.appendChild(document.createElement("div"));
    div.style.padding = "0px 15px";
    div.style.marginBottom = "50px";
  
    div.appendChild(document.createElement("p")).innerHTML = content;
  
    return frag;
  }

//   let newPost = createPost('Vaahne','What is the content anyway?');
//   body.appendChild(newPost);


  function temp(tit,cont){
  let template = document.querySelector("template");
  let newCard = template.content.cloneNode(true);

  let title = newCard.querySelector(".title");
  let contents = newCard.querySelector(".pcontent");

  title.textContent =tit; 
  contents.textContent = cont;


  body.appendChild(newCard);
  }

  temp("first","First Post");
  temp("Second","Second Post");
  temp("Third","Third Post");
  temp("Fourth","Fourth Post");
  temp("Fifth","Fifth Post");
  temp("Sixth","Sixth Post");
  temp("Seventh","Seventh Post");
  temp("Eight","Eigth Post");
  
  