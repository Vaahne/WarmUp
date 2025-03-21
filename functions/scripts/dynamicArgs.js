//arguments is the hidden parameter in a function
// arguments is  object (array like object)
function dynaArgs(str){
    let skills = []
    for(let i =1 ; i<arguments.length;i++){
        skills.push(arguments[i]);       
    }
    return{devName:str,
        jobSkills: skills
    } ;
}
let a = dynaArgs("Durga","Java","Python","CSS","React");
console.log(a)


//  Using spread operator (...)
// ...param called rest parameter 
// rest parameter should always comes last
// specific parameters comes first
function anotherMethod (dName, ...skills){
    return{
        name: dName,
        jobSkills: skills
    };
}
console.log(anotherMethod("Vaahne","Java","Python","React"));

// default param value in a function
function makeCar(make,model,color="No Color provided"){
    return{
        make : make,
        model: model,
        color:color
    };
}

console.log(makeCar("Honda","Civic"));
console.log(makeCar("Honda","Civic","Red"));

// callback functions (passing function as an argument)
console.log("callback functions (passing function as an argument)");
let animal = ["Duck","Duck","Moose","Chicken"];

animal.forEach(function(el){
    console.log(el);
});
// anonymous arrow function
console.log("Anonymous arrow function");
animal.forEach(el =>{
    console.log(el);
});

// params and action


// IIFE
(function(){
    console.log("Hi Vaahne");
})();

(function(name){
    console.log(`Hello ${name}`);
})("Vaahne");

// ******************* Pass By value ************************
// here passing the literal value with a primitive datatype Not the place in memory
let myVar = 20; // module scope

function passByValue(myVar){
    myVar = myVar*10;   // function scope, only exists in code block
    return myVar;
}
console.log(myVar);
console.log(passByValue(myVar));
console.log(myVar);
// ****************Pass By Reference*******************************
console.log("Pass By Reference****");
let myVar1 = {value:20,type:'+'};
function passByReference(x){
    x.value = x.value*20;
}
console.log(myVar1.value);
passByReference(myVar1);
console.log(myVar1.value);

//  Ex2 pass by reference
let ani = [1,2,3];

let ani1 = ani; // pass by reference

ani1.push(4);
console.log(ani);
console.log(ani1);
