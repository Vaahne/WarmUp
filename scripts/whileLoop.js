//Exercise
let num = 20;
while (num >0){
    console.log(num);
    num--;
}
console.log( " work 2")
let i = 3;
while (i<35){
   console.log(i);
   i +=3 ;
}
console.log( " work 3")
let j = 5;
while (j< 100){
   console.log(j);
   j +=5 ;
}

console.log( " work 4")
let k = 3;
while (k< 20){
   if(k%2==0){
     console.log(""+k*3);
   }
        
    k++;
}

console.log( " work 5")
let p = 0;
while (p< 20){
   if(p%2!=0 && p%3!=0)
        console.log(`${p} is prime`)
    p++;
}

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

//Write a loop that outputs how many quarters Romeo received.
console.log("Bonus Question");
let cost =4;
let paid = 10;
let change = paid - cost;
let quart =0;
while(change>0){
    quart += 4;
    change --;
}

console.log(`you got ${quart} quarters`)
