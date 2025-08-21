class MemoryBank{
    Data = [] ;
    addData(item){
        this.Data.push(item);
    }
    removeData(item){
        // let index = this.Data.filter(d => {d.name ==  item});
        //  this.Data.splice(index,1);
       let index = this.Data.indexOf(item);
       if(index != -1){
            this.Data.splice(index,1);
       }else{
            console.log("Item not found");
       }
    }
    searchData(query){
        let found = this.Data.find(d => d == query || d == 'Apple');
        console.log("found ",found);
        if(found){
            console.log("Found!!");
            // console.log(`Found at ${this.Data.indexOf(query)} position `);
        }else{
            console.log(`Not Found !!!`);
        }
    }
}

let m = new MemoryBank();
// m.addData({name: "Apple",desc: "Apple a day keep doctor away ",catogery:"Fruit"});
// m.addData({name: "Banana",desc: "Good for digestion ",catogery:"Fruit"});
// m.addData({name: "Orange",desc: "Hydrating fruit ",catogery:"Fruit"});

// m.removeData("Apple");


m.addData("Apple");
m.addData("Banana");
m.addData("Orange");

console.log(m.Data);

m.searchData("Grapes");
m.searchData("Banana");

m.removeData("Apple");
console.log(m.Data);