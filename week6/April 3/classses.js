class Animal {
    
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes,
    this.legs = legs,
    this.isAwake = isAwake,
    this.isMoving = isMoving
    }
	  // return is not needed because the new object is returned by default
	
}

const cat1 = new Animal(2, 4, true, false);
const dog =  new Animal(2, 4, true, true);
console.log(`cat eyes ${cat1.eyes}`);
console.log(`Dog ismoving ${dog.isMoving}`);