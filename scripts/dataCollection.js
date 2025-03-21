// create an array
let movies = ["RRR","Sonic","Lion King"];

console.log(movies);
console.log("using for loop");

for (let i =0; i<movies.length;i++){
    console.log(movies[i]);    
}

console.log(" other way using for of");

for(let i of movies){
    console.log(i);
}

// console.log(movies[0].length);
console.log(typeof movies);

// Concat()
let mymovies = ['RRR','sonic'];
let yourMovies = ['LionKing'];

let fullMovies = mymovies.concat(yourMovies);

console.log(fullMovies);
// we can concat more no of arrays or double the array
fullMovies = mymovies.concat();
console.log(fullMovies);

// adds an element at the end
movies.push('Transformers','Tom and Jerry');
console.log(movies);

// removes an element from the end
movies.pop();
console.log(movies);

// removes the first element 
movies.shift();
console.log(movies);

// adds element at the beginning
movies.unshift("Terrfier 3","Terrifier 2");
console.log(movies);

//.splice adds/removes from anywhere in an array
// here at position 2,delete 3 elements, and add 2 movies
// if we assign the splice to a variable , it saves the deleted elements
let deletedMovies = movies.splice(2,3,"Road the El Dorado","Atlantis");
console.log(movies);
console.log(" Deleted Movies "+deletedMovies);

//.slice() -> it returns a copy of original array 
let randList = movies.slice(1,3);
console.log(randList);

//.at() --> returns data at specified index , allows negative indexing
console.log(movies.at(-1)); // last element

//reverse() --> reverse the elements in place (first element to last and vice versa)
console.log(movies);
console.log(movies.reverse());

//flat() --> flattens 2d or more arrays into 1 dimension less
let num = [
    [2,3,4,[3,3]],
    [54,45,323,[65,54]],
    [34,3,2,[35,2]]
];
console.log(num);
console.log(num.flat());

let n =[[[1],[2]],
        [[3],[4]],
        [[5],[16]]];
console.log(n);
console.log(n.flat(2)); // flats by 2 dimensions

//sort()    --> sorts an array in place. sorts in ascending order of first digit if numbers and for string it sorts alphabetically utf-16 . It modifies the origianl array.
// toSorted() --> doesnt change the original array
console.log("Sorting");
console.log(n.flat(2).sort());
console.log(movies.sort());

// indexof & lastIndexOf -- > gives index numbers of elements in array
console.log(movies);
console.log(movies.indexOf('Terrifier 2')); // always returns the first index , -1 means not found
console.log(movies.lastIndexOf('Sonic')); // always returns the last index , -1 return value means not found

//forEach() -> parenthais are the variables you want to work with 
// braces are the actions to be performed on those variables
// first variable in parenthesis: represent each individual element in array
// second varible in parenthesis : index number
movies.forEach((el,i)=>{
    console.log(`${el} element is in ${i} index`);
});
console.log("For each")
movies.forEach((el,i,j)=>{
    console.log(`${el} element is in ${i} index`);
    console.log(`Hello ${j} is j`);
});

//spread operator (...) dot dot dot
console.log("Spread Operator");
    let newList = [...movies];
    console.log(newList);
    let brandNew = ["Sonic",...movies];
    console.log(brandNew);

//Object key value
const vehicle = {
    color: "blue",
    year: 1989,
    hp: 4000,
    "make-model":"Honda Civic"
}
console.log(vehicle["color"]); // square bracket
console.log(vehicle.color); // dot notation

console.log(vehicle["make-model"]); // for the props with - or space only [] can be used but not .(dot)

// changing the values of properties and values
vehicle.color = "red";
vehicle["make-model"] = "Nissan Rouge";
delete vehicle.hp;  // deleting a prop
vehicle["duck power"] = 500000;

console.log(vehicle);

for(let key in vehicle){
    console.log(`the prop ${key} has value ${vehicle[key]}`)
}

