//  Anatomy of Fetch req
//  varaible to save response into
// equals await fetch()
// fetch 1st arg -> url, 2nd url -> options Object
//  options object  most common properties
// method: "GET","POST","PUT","DELETE"
// headers: apikeys,content-type,jwt
// body: any data (in JSON Object form ) you wish to send


// let res = await fetch("www.example.com",{
//     method: "POST",
//     header: {"Content-Type": "application/JSON"},
//     body:{
//         username: "D-Dawg",
//         password : 23232
//     }
// });


const dog = document.getElementById('dog');
dog.addEventListener("click", getNewDog);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer';
}

getNewDog();
