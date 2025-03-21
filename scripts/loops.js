// for loop
//Exercise1
console.log("Count from 10 to 1");
for(let i=10; i>0;i--){
    console.log(i);
}
console.log("Odd numbers");
for(let i=1; i<10;i++){
    if(i%2!=0)
        console.log(i);
}
console.log("Even numbers");
for(let i=1; i<10;i++){
    if(i%2==0)
        console.log(i);
}
console.log("Multiple of 3");
for(let i=6; i<=60;i+=3){
        console.log(i);
}
console.log("Symbol");
let hash = '';
for(let i=1; i<=7 ; i++){
    hash += '#';
    console.log(hash);
}