/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return "";

    let checker = strs[0];

    for(let i = 0 ;i<strs.length;i++){

       if(strs[i].indexOf(checker) == 0){
            if(i == strs.length-1)
                return checker;
            // console.log(strs[i]);
        }
        else {

            do{
                checker = checker.slice(0,-1);
            }while(strs[i].startsWith(checker) == 0);
            
            // console.log(checker," inside else")
        }
    }

    return checker;
};

console.log(longestCommonPrefix(["flower","flow","florida","fla"]));