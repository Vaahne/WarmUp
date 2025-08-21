/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBraces = ['(','{','['];
    const closeBraces = [')','}',']'];

    let position = [];

    for (let i = 0 ;i<s.length;i++){
        
        if(openBraces.includes(s[i]))
            position.push(s[i]);
        if(closeBraces.includes(s[i])){
            let check = position.pop();
            if(openBraces.indexOf(check)!=closeBraces.indexOf(s[i]))
                return false;
        }   
    }
    if(position.length != 0)
        return false;
    return true;
};

console.log(isValid('{(})'));


// var isValid = function (s) {
//     // If less than 2 return false
//     if (s.length < 2) return false;
//     // Legend / Key / Dictionary
//     const brackets = {
//         "(": ")",
//         "{": "}",
//         "[": "]"
//     };
//     // Memory Allocation
//     let mem = [];
//     // Looping through the string
//     for (let i = 0; i < s.length; i++) {
//         // if string index, is a key then push closing brasket to memory heap
//         if (brackets[s[i]]) mem.push(brackets[s[i]]);
//         // Return false if string index does NOT match memory heap
//         else if (mem.pop() !== s[i]) return false; 
//     }
//     // return NOT false = true
//     return !mem.length
// };