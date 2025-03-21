// let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// //let data ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// //let data ="ID,Name,Occupation,Age,Salary,Department,City,Experience,Email\n101,John Doe,Software Engineer,29,75000,IT,New York,5,john.doe@example.com\n102,Jane Smith,Data Analyst,34,68000,Analytics,San Francisco,7,jane.smith@example.com\n103,Michael Brown,Product Manager,40,95000,Management,Seattle,12,michael.brown@example.com\n104,Emily Davis,HR Specialist,28,62000,HR,Boston,4,emily.davis@example.com\n105,Robert Wilson,Marketing Executive,37,72000,Marketing,Chicago,9,robert.wilson@example.com\n106,Linda Johnson,UI/UX Designer,31,70000,Design,Los Angeles,6,linda.johnson@example.com\n107,David White,DevOps Engineer,35,88000,IT,Austin,10,david.white@example.com";

// // Part 1 & 2
// let cols = 0;
// let rows = 0;
// let dataInArray = [[]];
// let totalCols;
// let w = '';
// // console.log("Data",data);
// console.log("*****************Part1 & 2**********************");
// for (let c in data){
//     if(data[c] == ','){
//         // console.log(`${w} word and rows ${rows} in ,`);
//         dataInArray[rows].push(w);
//         cols++;        
//         w = '';
//     }else if(data[c] == '\n'){
//         // console.log("row at at the end of line", w);
//         if(rows === 0)
//             totalCols = cols;
//         dataInArray[rows].push(w);
//         rows++;
//         cols = 0;
//         dataInArray.push([]);   // pushing empty second row
//         w = '';
//     }else{
//         w += data[c];
//     }
//     if(c== data.length-1)   // last element of the last row , as last line dont have new line
//         dataInArray[rows].push(w);
// }

// console.log(dataInArray);

// // Part 3
// console.log("*************************Part3********************************************");
// // let colNames = dataInArray.slice(0,1);
// // console.log(colNames[0][0]);

// let colNames = dataInArray[0];  // fetching the column headers into colNames

// dataInArray.shift();    // removes 1st row which is header

// let updatedData = [];   // initialized empty array for array of objects

// for(let i=0; i<rows ; i++){
//     let rowObj = {};
//     for(let j=0;j<=cols;j++){
//         rowObj[colNames[j].toLowerCase()] = dataInArray[i][j];
//     }
//     updatedData.push(rowObj);
// }
// console.log(updatedData);

// // Part4 works only for given data but not for dynamic data
// console.log("**************************Part4***************************");
// console.log("Works only for given data but not for dynamic data");
// console.log(" removes the last element of the array");
// updatedData.pop();  // removes the last element of the array
// console.log(updatedData);

// let objData = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
// console.log("add data at index 1 ");
// updatedData.splice(1,0,objData);    // add data at index 1 
// console.log(updatedData);

// objData = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
// console.log("adds at the end of the array");
// updatedData.push(objData);  // adds at the end of the array
// console.log(updatedData);

// console.log("Finding the average of age");
// let sumAge = 0;
// for(let i in updatedData){
//     sumAge += Number(updatedData[i].age);
// }
// let averageAge = sumAge/updatedData.length;
// console.log(`Average of age is: ${averageAge}`);

// // Part 5
// console.log("**************Part 5***********************");
// let csvData = '';








// for(let i of updatedData){
//     for(let key in i){
//         csvData += key+":"+(i[key])+",";
//     }
//      csvData+="\n";
// }
// csvData = csvData.slice(0,csvData.length-2);    // removes the last ,
// console.log("***************Data into csv ***********************");
// console.log(csvData);

let data = "asdf,asdf,asdf,adsf,";
 data = data.slice(0,data.length-1);

console.log(data);