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
    occupation: 'Front-End Developer',
    introduce() {
      console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
    }
  }
//   let introduce = 1;
  person.introduce = introduce;
  person.introduce();


  function introduceObject(Object) {
    console.log(`Hello, my name is ${Object.name.first} ${Object.name.last}, and I'm a ${Object.age}-year-old ${Object.occupation} from ${Object.location.city}, ${Object.location.state}!`);
  }
  introduceObject(person);