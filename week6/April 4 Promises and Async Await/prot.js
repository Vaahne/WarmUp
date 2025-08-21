const commPrototype = {
    introduce() {
      console.log(`Hey there, I have a name now! I'm ${this.name}!`);
    }
  };
  
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, commPrototype);
  // or
  // Person.prototype.introduce = commPrototype.introduce;
  
  const person = new Person("Leo");
  person.introduce(); // Hey there, I 