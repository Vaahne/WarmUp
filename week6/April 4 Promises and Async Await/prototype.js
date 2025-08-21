class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const cat1 = new SpottedTabby();
let object = cat1;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

