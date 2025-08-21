
class Animal {
        constructor(eyes, legs, isAwake, isMoving) {
            this.eyes = eyes;
        this.legs = legs;
        this.isAwake = isAwake;
        this.isMoving = isMoving;
          // return is not needed because the new object is returned by default
        }
      sleep() {
        this.isAwake = false;
      }
      wake() {
        this.isAwake = true;
      }
      sit() {
        this.isMoving = false;
      }
      walk() {
        this.isMoving = true;
      }
      speak(sound) {
        console.log(sound);
      }
      toString(){
        return `eyes: ${this.eyes} , legs: ${this.legs} , isAwake: ${this.isAwake} `;
      }
}
class Human extends Animal{
    constructor(name,age,location,occupation){
        console.log(name.first , age );
        super(2,2,true,true);
        this.name = {
            first : name.first,
            last :  name.last
        }
        this.age = age;
        this.location = {
            city : location.city,
            state : location.state,
            zipCode : location.zipCode
        } ;
        this.occupation = occupation;
    }
    introduce(){
        return `Hello , my name is :${this.name.first} ${this.name.last}, I am ${this.age}-year old, occupation:${this.occupation} from ${this.location.city}, ${this.location.state} !`;
    }
    speak(){
        super.speak("Hi Hello");
    }
}

const person = {
    name: {
      first: 'Elyan',
      last: 'Kemble',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer'
};
console.log(person.name);
const person1= new Human(person.name,person.age,person.location,person.occupation);
console.log(person1.toString());