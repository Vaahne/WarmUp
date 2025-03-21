// String Concatenation
let s1 ="hello" , s2= "world";
console.log(s1+s2);

let s3 = "age is: ", n = 27;
console.log(s3 + n)

// getting each character using []
let name1 ="Vaahne"
console.log(name1[0])
console.log(name1.length)
console.log("Hello World"[2]) 

console.log("Hey" === "Hey")
console.log("hey" == "Hey")

const frost =
	"Nature’s first green is gold, " +
	"Her hardest hue to hold. " +
	"Her early leaf’s a flower; " +
	"But only so an hour. " +
	"Then leaf subsides to leaf. " +
	"So Eden sank to grief, " +
	"So dawn goes down to day. " +
	"Nothing gold can stay. ";

console.log(frost);

// instead of " and + we can use \(back slash)

 let frosty =
	"Nature’s first green is gold, \
	Her hardest hue to hold.  \
	Her early leaf’s a flower;  \
	But only so an hour. \
	Then leaf subsides to leaf. \
	So Eden sank to grief, \
	So dawn goes down to day. \
	Nothing gold can stay. ";

console.log(frosty);

let str = `This is inside
     backticks \n
      wow and we can
       add so many ""`;

console.log(str)

// String Interpilation

let name2= "Vaahne", age = 27;
console.log(`my name is ${name2} and I am ${age} years old `);