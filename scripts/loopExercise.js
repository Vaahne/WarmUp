// prime , even, odd 
for(let i=1;i<=20;i++){
    let prime= 0;
    for(let j=2;j<i;j++){
        if(i%j==0)
            prime++;
    }
    if(prime != 0 || (i<=3 && i>=1)){
        if(i%2==0)
            console.log(i+" Even");
        if(i%2!=0)
            console.log(i+" Odd");
    }else{
        console.log(i+" Prime")
    }   
}

//  2nd method
for(let i = 1; i <= 20; i++){
    if (i < 4){
        if(i % 2 == 0 ){
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
    } else {
        if(i % 2 !== 0 && i % 3 !== 0){
            console.log(`${i} is prime`)
        } else if (i % 2 === 0 ){
            console.log(`${i} is even`) 
        } else {
            console.log(`${i} is odd`)
        }
    }
}

//3rd method not readable
for(let i = 1; i <= 20; i++){
    switch(true){
        case i < 4 && i % 2 == 0 :
            console.log(`${i} is even`);
            break;
        case i < 4  && i % 2 == 1:
            console.log(`${i} is odd`);
            break;
        case i > 3 && i % 2 !== 0 && i % 3 !== 0:
            console.log(`${i} is prime`);
            break;
        case i > 3 && (i % 2 === 0 ):
            console.log(`${i} is even`);
            break;
        default:
            console.log(`${i} is odd`);
    }
}