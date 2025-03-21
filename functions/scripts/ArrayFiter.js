let ppl = [{name:"asdf", age:20},{name:"asdfadsf  adfs",age:30},{name:"asdsdfaf",age:40}];

console.log(ppl);
ppl = ppl.filter(f => (f.age>20));
console.log(ppl);