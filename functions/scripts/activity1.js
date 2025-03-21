
console.log(`area of rect is ${area(4,2)}`);

function area(w,h){
    return w*h;
}


// Activity2

let hasWater = function(planet){
    planet = planet.toLowerCase();
    if(planet == 'earth' || planet == 'mars'){
        return true;
    }
    return false;
}

console.log(hasWater('Mars'));
console.log(hasWater('Venus')); 