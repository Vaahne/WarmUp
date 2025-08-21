
const dog = document.getElementById('dog'); //get img tag from DOM
dog.addEventListener("click", getNewDog); //add event listener with getNewDog
async function getNewDog() {
    dog.style.cursor = 'wait'; //stylyzing cursor
    const response = await fetch("https://dog.ceo/api/breeds/image/random"); // fetch request to get data
    const jsonData = await response.json(); //taking promse and converting JSON from it
    console.log(jsonData)
    const url = jsonData.message; // pulling message text from jsonData object
    dog.src = url; //setting img src as pulled data
    dog.style.cursor = 'pointer'; //stylzing cursor
}
getNewDog(); //Call it once upon loading of our page