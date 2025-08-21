// 
//  https://swapi.dev/documentation#people
// https://swapi.dev/api/people

async function getData(){
    try{
        const response =await fetch("https://swapi.dev/api/people");
        const data =await response.json();
        console.log(data);
    }catch(e){

    }
}

//getData();
fetch("https://swapi.dev/api/people")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})